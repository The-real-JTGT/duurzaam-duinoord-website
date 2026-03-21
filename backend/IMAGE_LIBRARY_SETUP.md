# Image Library Embeddings Setup

## Required env vars

Set these in `backend/.env`:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
OPENAI_API_KEY=your_openai_api_key
```

`SUPABASE_SERVICE_ROLE_KEY` is recommended here because the backend writes image metadata and embeddings.

## SQL migration

Run:

- [supabase_image_library.sql](C:/Users/RL51721/Documents/95%20Duurzaam%20Duinoord/New%20Website/DD-v0.1/backend/supabase_image_library.sql)

This creates:

- `public.image_library`
- the HNSW vector index
- the `match_image_library(...)` RPC function

## Backend endpoints

### Sync metadata into Supabase

`POST /image-library/sync`

```json
{
  "source_path": "C:/path/to/source-library.json",
  "asset_dir": "C:/path/to/frontend/public/media/library"
}
```

If omitted, the backend uses the repo defaults.

### Sync and embed in one call

`POST /image-library/reindex`

```json
{
  "model": "text-embedding-3-small",
  "batch_size": 50,
  "only_missing": true
}
```

### Backfill embeddings only

`POST /image-library/embed`

```json
{
  "model": "text-embedding-3-small",
  "batch_size": 50,
  "only_missing": true
}
```

### Semantic search

`POST /image-library/search`

```json
{
  "query": "hero image for energy coaching on a rooftop with solar panels",
  "limit": 8,
  "page_url": "http://www.duurzaamduinoord.nl/energiecoaching",
  "asset_types": ["photo"],
  "local_only": true
}
```

## Suggested rollout

1. Run the SQL migration in Supabase.
2. Add `SUPABASE_SERVICE_ROLE_KEY` and `OPENAI_API_KEY` to `backend/.env`.
3. Start the FastAPI backend.
4. Call `POST /image-library/reindex`.
5. Test `POST /image-library/search` with a few realistic prompts.
