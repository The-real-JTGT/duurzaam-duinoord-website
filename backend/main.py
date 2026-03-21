import os

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from supabase import create_client, Client
from dotenv import load_dotenv

try:
    from .image_library import (
        DEFAULT_EMBEDDING_MODEL,
        DEFAULT_LIBRARY_ASSET_DIR,
        DEFAULT_LIBRARY_SOURCE_PATH,
        ImageLibraryError,
        backfill_embeddings,
        search_images,
        sync_library_metadata,
    )
except ImportError:
    from image_library import (
        DEFAULT_EMBEDDING_MODEL,
        DEFAULT_LIBRARY_ASSET_DIR,
        DEFAULT_LIBRARY_SOURCE_PATH,
        ImageLibraryError,
        backfill_embeddings,
        search_images,
        sync_library_metadata,
    )

load_dotenv()

app = FastAPI(
    title="Duurzaam Duinoord CMS API",
    description="Backend API for the Duurzaam Duinoord drag-and-drop CMS",
    version="1.0.0"
)

# CORS configuration to allow Next.js app to communicate
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to the frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Supabase client
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY") or os.getenv("SUPABASE_KEY")
SUPABASE_KEY_SOURCE = "service_role" if os.getenv("SUPABASE_SERVICE_ROLE_KEY") else ("fallback" if os.getenv("SUPABASE_KEY") else "missing")

if SUPABASE_URL and SUPABASE_KEY:
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
else:
    print("Warning: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables are missing.")
    supabase = None


class ImageLibrarySyncRequest(BaseModel):
    source_path: str | None = None
    asset_dir: str | None = None


class ImageLibraryEmbedRequest(BaseModel):
    model: str = DEFAULT_EMBEDDING_MODEL
    limit: int | None = Field(default=None, ge=1, le=5000)
    batch_size: int = Field(default=50, ge=1, le=250)
    only_missing: bool = True


class ImageLibrarySearchRequest(BaseModel):
    query: str = Field(min_length=1)
    limit: int = Field(default=10, ge=1, le=50)
    page_url: str | None = None
    asset_types: list[str] | None = None
    local_only: bool = False
    model: str = DEFAULT_EMBEDDING_MODEL


class ImageLibraryReindexRequest(BaseModel):
    source_path: str | None = None
    asset_dir: str | None = None
    model: str = DEFAULT_EMBEDDING_MODEL
    limit: int | None = Field(default=None, ge=1, le=5000)
    batch_size: int = Field(default=50, ge=1, le=250)
    only_missing: bool = True


def require_supabase() -> Client:
    if supabase is None:
        raise HTTPException(status_code=503, detail="Supabase is not configured on the backend.")
    return supabase


@app.get("/")
def read_root():
    return {"message": "Welcome to the Duurzaam Duinoord API"}

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "supabase_connected": supabase is not None,
        "supabase_key_source": SUPABASE_KEY_SOURCE,
        "openai_configured": bool(os.getenv("OPENAI_API_KEY")),
        "image_library_source": str(DEFAULT_LIBRARY_SOURCE_PATH),
        "image_library_assets": str(DEFAULT_LIBRARY_ASSET_DIR),
    }


@app.post("/image-library/sync")
def image_library_sync(request: ImageLibrarySyncRequest):
    client = require_supabase()
    try:
        result = sync_library_metadata(
            client,
            source_path=request.source_path,
            asset_dir=request.asset_dir,
        )
        return {
            "status": "ok",
            "synced": result.synced,
            "local_assets": result.local_assets,
            "remote_assets": result.remote_assets,
            "source_path": result.source_path,
            "asset_dir": result.asset_dir,
        }
    except ImageLibraryError as error:
        raise HTTPException(status_code=400, detail=str(error)) from error
    except Exception as error:
        raise HTTPException(status_code=500, detail=f"Image library sync failed: {error}") from error


@app.post("/image-library/reindex")
def image_library_reindex(request: ImageLibraryReindexRequest):
    client = require_supabase()
    try:
        sync_result = sync_library_metadata(
            client,
            source_path=request.source_path,
            asset_dir=request.asset_dir,
        )
        embed_result = backfill_embeddings(
            client,
            model=request.model,
            limit=request.limit,
            batch_size=request.batch_size,
            only_missing=request.only_missing,
        )
        return {
            "status": "ok",
            "sync": {
                "synced": sync_result.synced,
                "local_assets": sync_result.local_assets,
                "remote_assets": sync_result.remote_assets,
                "source_path": sync_result.source_path,
                "asset_dir": sync_result.asset_dir,
            },
            "embeddings": embed_result,
        }
    except ImageLibraryError as error:
        raise HTTPException(status_code=400, detail=str(error)) from error
    except Exception as error:
        raise HTTPException(status_code=500, detail=f"Image library reindex failed: {error}") from error


@app.post("/image-library/embed")
def image_library_embed(request: ImageLibraryEmbedRequest):
    client = require_supabase()
    try:
        result = backfill_embeddings(
            client,
            model=request.model,
            limit=request.limit,
            batch_size=request.batch_size,
            only_missing=request.only_missing,
        )
        return {
            "status": "ok",
            **result,
        }
    except ImageLibraryError as error:
        raise HTTPException(status_code=400, detail=str(error)) from error
    except Exception as error:
        raise HTTPException(status_code=500, detail=f"Embedding backfill failed: {error}") from error


@app.post("/image-library/search")
def image_library_search(request: ImageLibrarySearchRequest):
    client = require_supabase()
    try:
        results = search_images(
            client,
            query=request.query,
            limit=request.limit,
            page_url=request.page_url,
            asset_types=request.asset_types,
            local_only=request.local_only,
            model=request.model,
        )
        return {
            "status": "ok",
            "count": len(results),
            "results": results,
        }
    except ImageLibraryError as error:
        raise HTTPException(status_code=400, detail=str(error)) from error
    except Exception as error:
        raise HTTPException(status_code=500, detail=f"Image search failed: {error}") from error
