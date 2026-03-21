from __future__ import annotations

import hashlib
import json
import os
import re
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Iterable
from urllib.parse import urlparse

from openai import OpenAI

DEFAULT_EMBEDDING_MODEL = "text-embedding-3-small"
DEFAULT_EMBEDDING_DIMENSIONS = 1536
DEFAULT_EMBED_BATCH_SIZE = 50
DEFAULT_MATCH_COUNT = 12
IMAGE_LIBRARY_TABLE = "image_library"
MATCH_FUNCTION_NAME = "match_image_library"

PROJECT_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_LIBRARY_SOURCE_PATH = PROJECT_ROOT / "frontend" / "src" / "content" / "image-library" / "source-library.json"
DEFAULT_LIBRARY_ASSET_DIR = PROJECT_ROOT / "frontend" / "public" / "media" / "library"

ASSET_TYPE_RULES: list[tuple[str, tuple[str, ...]]] = [
    ("logo", ("logo", "woordmerk", "beeldmerk")),
    ("flag", ("flag", "vlag")),
    ("diagram", ("diagram", "heat loss", "warmteverlies", "illustrating", "illustratie")),
    ("chart", ("pie chart", "bar chart", "cirkeldiagram", "grafiek", "chart")),
    ("map", ("map", "kaart", "plattegrond", "street layouts", "begrenzingskaart")),
    ("icon", ("icon", "shopping bag", "pictogram")),
    ("document", ("document cover", "omslag", "rapport", "conceptontwerp", "official logo of den haag")),
    ("photo", ()),
]

TAG_RULES: list[tuple[str, tuple[str, ...]]] = [
    ("people", ("man", "woman", "mensen", "people", "adults", "gesprek", "conversation", "attendees")),
    ("event", ("event", "markt", "brochures", "pamphlets", "networking", "gemeenschap", "community center")),
    ("garden", ("garden", "tuin", "geveltuin", "bloementuin", "planten", "rose", "rozen", "greenery")),
    ("street", ("straat", "street", "urban home", "facade", "wijk")),
    ("rooftop", ("rooftop", "dak", "gravel roof", "roof access hatch")),
    ("solar", ("zonnepanelen", "solar", "panel")),
    ("energy", ("warmte", "energy", "heat", "isolated", "insulated", "warmtetransitie")),
    ("historic", ("historic", "historische", "1996", "monumentale", "archive")),
    ("children", ("child", "kind", "children")),
]


class ImageLibraryError(Exception):
    pass


@dataclass
class SyncResult:
    synced: int
    local_assets: int
    remote_assets: int
    source_path: str
    asset_dir: str


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def normalize_text(value: Any) -> str:
    text = str(value or "").strip().lower()
    text = re.sub(r"https?://", " ", text)
    text = re.sub(r"[^a-z0-9]+", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def tokenize(value: Any) -> list[str]:
    tokens = [token for token in normalize_text(value).split(" ") if len(token) > 1]
    seen: set[str] = set()
    unique_tokens: list[str] = []
    for token in tokens:
        if token in seen:
            continue
        seen.add(token)
        unique_tokens.append(token)
    return unique_tokens


def get_page_path(page_url: str) -> str:
    try:
        parsed = urlparse(page_url)
        return parsed.path or "/"
    except Exception:
        return ""


def detect_asset_type(*values: str) -> str:
    haystack = normalize_text(" ".join(values))
    for asset_type, terms in ASSET_TYPE_RULES:
      if not terms:
          continue
      if any(normalize_text(term) in haystack for term in terms):
          return asset_type
    return "photo"


def detect_tags(*values: str) -> list[str]:
    haystack = normalize_text(" ".join(values))
    tags: list[str] = []
    for tag, terms in TAG_RULES:
        if any(normalize_text(term) in haystack for term in terms):
            tags.append(tag)
    return tags


def build_search_text(entry: dict[str, Any]) -> str:
    parts = [
        f"asset type: {entry['asset_type']}",
        f"filename: {entry['filename']}",
        f"page url: {entry['page_url']}",
        f"page path: {entry['page_path']}",
        f"alt text: {entry['alt_text']}",
        f"tags: {', '.join(entry['tags'])}",
        f"description: {entry['description']}",
    ]
    return "\n".join(part for part in parts if part and not part.endswith(": "))


def checksum_text(value: str) -> str:
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


def get_openai_client() -> OpenAI:
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise ImageLibraryError("OPENAI_API_KEY is not configured.")
    return OpenAI(api_key=api_key)


def load_source_library(source_path: str | None = None) -> list[dict[str, Any]]:
    library_path = Path(source_path) if source_path else DEFAULT_LIBRARY_SOURCE_PATH
    if not library_path.exists():
        raise ImageLibraryError(f"Image library source file not found: {library_path}")

    raw = json.loads(library_path.read_text(encoding="utf-8"))
    if not isinstance(raw, list):
        raise ImageLibraryError(f"Expected an array in image library source file: {library_path}")
    return raw


def prepare_library_rows(
    source_entries: Iterable[dict[str, Any]],
    asset_dir: str | None = None,
) -> list[dict[str, Any]]:
    asset_directory = Path(asset_dir) if asset_dir else DEFAULT_LIBRARY_ASSET_DIR
    rows: list[dict[str, Any]] = []

    for raw_entry in source_entries:
        filename = str(raw_entry.get("filename") or "").strip()
        if not filename:
            continue

        page_url = str(raw_entry.get("pageUrl") or "").strip()
        alt_text = str(raw_entry.get("altText") or "").strip()
        description = str(raw_entry.get("description") or "").strip()
        original_url = str(raw_entry.get("originalUrl") or "").strip()
        page_path = get_page_path(page_url)
        local_url = f"/media/library/{filename}"
        has_local_asset = (asset_directory / filename).exists()
        asset_type = detect_asset_type(alt_text, description, page_url, original_url, filename)
        tags = detect_tags(alt_text, description, page_url)

        row = {
            "filename": filename,
            "original_url": original_url,
            "local_url": local_url,
            "page_url": page_url,
            "page_path": page_path,
            "alt_text": alt_text,
            "description": description,
            "asset_type": asset_type,
            "tags": tags,
            "has_local_asset": has_local_asset,
        }
        row["search_text"] = build_search_text(row)
        row["search_text_checksum"] = checksum_text(row["search_text"])
        row["updated_at"] = now_iso()
        rows.append(row)

    return rows


def chunked(items: list[Any], chunk_size: int) -> Iterable[list[Any]]:
    for index in range(0, len(items), chunk_size):
        yield items[index:index + chunk_size]


def sync_library_metadata(
    supabase: Any,
    source_path: str | None = None,
    asset_dir: str | None = None,
) -> SyncResult:
    source_entries = load_source_library(source_path)
    rows = prepare_library_rows(source_entries, asset_dir)

    if not rows:
        raise ImageLibraryError("No valid image library rows were found to sync.")

    for batch in chunked(rows, 200):
        supabase.table(IMAGE_LIBRARY_TABLE).upsert(batch, on_conflict="filename").execute()

    local_assets = sum(1 for row in rows if row["has_local_asset"])
    remote_assets = len(rows) - local_assets

    return SyncResult(
        synced=len(rows),
        local_assets=local_assets,
        remote_assets=remote_assets,
        source_path=str(Path(source_path) if source_path else DEFAULT_LIBRARY_SOURCE_PATH),
        asset_dir=str(Path(asset_dir) if asset_dir else DEFAULT_LIBRARY_ASSET_DIR),
    )


def fetch_image_rows(supabase: Any, limit: int | None = None) -> list[dict[str, Any]]:
    page_size = 500
    rows: list[dict[str, Any]] = []
    start = 0

    while True:
        end = start + page_size - 1
        query = supabase.table(IMAGE_LIBRARY_TABLE).select("*").range(start, end).order("id")
        response = query.execute()
        batch = response.data or []
        if not batch:
            break

        rows.extend(batch)
        if limit is not None and len(rows) >= limit:
            return rows[:limit]

        if len(batch) < page_size:
            break

        start += page_size

    return rows[:limit] if limit is not None else rows


def rows_needing_embeddings(rows: Iterable[dict[str, Any]], model: str) -> list[dict[str, Any]]:
    needs_embedding: list[dict[str, Any]] = []
    for row in rows:
        if not row.get("embedding"):
            needs_embedding.append(row)
            continue
        if row.get("embedding_model") != model:
            needs_embedding.append(row)
            continue
        if row.get("search_text_checksum") != checksum_text(str(row.get("search_text") or "")):
            needs_embedding.append(row)
    return needs_embedding


def create_embeddings(texts: list[str], model: str) -> list[list[float]]:
    if not texts:
        return []
    client = get_openai_client()
    response = client.embeddings.create(
        model=model,
        input=texts,
        encoding_format="float",
    )
    return [item.embedding for item in response.data]


def parse_embedding(value: Any) -> list[float] | None:
    if value is None:
        return None
    if isinstance(value, list):
        return [float(item) for item in value]
    if isinstance(value, str):
        text = value.strip()
        if not text:
            return None
        try:
            return [float(item) for item in json.loads(text)]
        except json.JSONDecodeError:
            return None
    return None


def cosine_similarity(left: list[float], right: list[float]) -> float:
    if not left or not right or len(left) != len(right):
        return 0.0

    left_norm = 0.0
    right_norm = 0.0
    dot_product = 0.0

    for left_value, right_value in zip(left, right):
        dot_product += left_value * right_value
        left_norm += left_value * left_value
        right_norm += right_value * right_value

    if left_norm <= 0 or right_norm <= 0:
        return 0.0

    return dot_product / ((left_norm ** 0.5) * (right_norm ** 0.5))


def backfill_embeddings(
    supabase: Any,
    model: str = DEFAULT_EMBEDDING_MODEL,
    limit: int | None = None,
    batch_size: int = DEFAULT_EMBED_BATCH_SIZE,
    only_missing: bool = True,
) -> dict[str, Any]:
    rows = fetch_image_rows(supabase)
    target_rows = rows_needing_embeddings(rows, model) if only_missing else rows

    if limit is not None:
        target_rows = target_rows[:limit]

    if not target_rows:
        return {
            "embedded": 0,
            "model": model,
            "remaining": 0,
            "message": "No image rows require embedding updates.",
        }

    embedded_count = 0
    for batch in chunked(target_rows, batch_size):
        texts = [str(row.get("search_text") or "") for row in batch]
        embeddings = create_embeddings(texts, model)

        for row, embedding in zip(batch, embeddings):
            update_payload = {
                "filename": row["filename"],
                "original_url": row.get("original_url"),
                "local_url": row.get("local_url"),
                "page_url": row.get("page_url"),
                "page_path": row.get("page_path"),
                "alt_text": row.get("alt_text") or "",
                "description": row.get("description") or "",
                "asset_type": row.get("asset_type") or "photo",
                "tags": row.get("tags") or [],
                "search_text": row.get("search_text") or "",
                "search_text_checksum": row.get("search_text_checksum") or checksum_text(row.get("search_text") or ""),
                "has_local_asset": bool(row.get("has_local_asset")),
                "embedding": embedding,
                "embedding_model": model,
                "embedded_at": now_iso(),
                "updated_at": now_iso(),
            }
            supabase.table(IMAGE_LIBRARY_TABLE).update(update_payload).eq("id", row["id"]).execute()
            embedded_count += 1

    remaining = len(rows_needing_embeddings(fetch_image_rows(supabase), model))
    return {
        "embedded": embedded_count,
        "model": model,
        "remaining": remaining,
    }


def score_keyword_match(row: dict[str, Any], query: str, page_url: str | None = None) -> tuple[float, list[str]]:
    tokens = tokenize(query)
    alt_text = normalize_text(row.get("alt_text"))
    description = normalize_text(row.get("description"))
    page_text = normalize_text(row.get("page_url"))
    path_text = normalize_text(row.get("page_path"))
    asset_type = str(row.get("asset_type") or "")
    reasons: list[str] = []
    score = 0.0

    for token in tokens:
        if token and token in alt_text:
            score += 8
            reasons.append(f"alt:{token}")
        elif token and token in description:
            score += 6
            reasons.append(f"description:{token}")
        elif token and (token in page_text or token in path_text):
            score += 4
            reasons.append(f"page:{token}")
        elif token and token == asset_type:
            score += 10
            reasons.append(f"type:{token}")

    if page_url and str(row.get("page_url") or "").lower() == page_url.lower():
        score += 12
        reasons.append("same source page")
    elif page_url and get_page_path(page_url) and str(row.get("page_path") or "") == get_page_path(page_url):
        score += 8
        reasons.append("same source path")

    if row.get("has_local_asset"):
        score += 5
        reasons.append("local asset")

    return score, list(dict.fromkeys(reasons))


def search_images(
    supabase: Any,
    query: str,
    limit: int = DEFAULT_MATCH_COUNT,
    page_url: str | None = None,
    asset_types: list[str] | None = None,
    local_only: bool = False,
    model: str = DEFAULT_EMBEDDING_MODEL,
) -> list[dict[str, Any]]:
    if not query.strip():
        raise ImageLibraryError("Search query cannot be empty.")

    [query_embedding] = create_embeddings([query], model)
    results: list[dict[str, Any]] = []
    strategy = "rpc"

    try:
        response = supabase.rpc(MATCH_FUNCTION_NAME, {
            "query_embedding": query_embedding,
            "match_count": max(limit * 3, 20),
            "match_threshold": 0.0,
            "filter_asset_types": asset_types,
            "restrict_to_local": local_only,
        }).execute()
        results = response.data or []
    except Exception:
        strategy = "python_fallback"
        python_results: list[dict[str, Any]] = []
        for row in fetch_image_rows(supabase):
            if asset_types and row.get("asset_type") not in asset_types:
                continue
            if local_only and not row.get("has_local_asset"):
                continue

            embedding = parse_embedding(row.get("embedding"))
            if not embedding:
                continue

            python_results.append({
                **row,
                "similarity": cosine_similarity(query_embedding, embedding),
            })

        python_results.sort(key=lambda item: float(item.get("similarity") or 0.0), reverse=True)
        results = python_results[: max(limit * 3, 20)]

    reranked: list[dict[str, Any]] = []

    for row in results:
        keyword_score, reasons = score_keyword_match(row, query, page_url=page_url)
        semantic_similarity = float(row.get("similarity") or 0.0)
        semantic_score = semantic_similarity * 100
        final_score = semantic_score + keyword_score
        resolved_url = row.get("local_url") if row.get("has_local_asset") else row.get("original_url")
        reranked.append({
            **row,
            "resolved_url": resolved_url,
            "semantic_score": round(semantic_score, 3),
            "keyword_score": round(keyword_score, 3),
            "final_score": round(final_score, 3),
            "reasons": reasons,
            "search_strategy": strategy,
        })

    reranked.sort(key=lambda item: item["final_score"], reverse=True)
    return reranked[:limit]
