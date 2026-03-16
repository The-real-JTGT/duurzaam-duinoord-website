import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client, Client
from dotenv import load_dotenv

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
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

if SUPABASE_URL and SUPABASE_KEY:
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
else:
    print("Warning: SUPABASE_URL or SUPABASE_KEY environment variables are missing.")
    supabase = None

@app.get("/")
def read_root():
    return {"message": "Welcome to the Duurzaam Duinoord API"}

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "supabase_connected": supabase is not None
    }
