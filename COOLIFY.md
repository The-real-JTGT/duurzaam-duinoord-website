# Coolify Deployment

Deploy this repo as a single Coolify application using the Docker Compose build pack.

## Coolify settings

- Repository: this monorepo
- Base Directory: `/`
- Compose file: `docker-compose.coolify.yml`
- Public domain: attach it only to the `frontend` service
- Do not assign a public domain to `backend`

## Required environment variables

### Frontend

- `CMS_ADMIN_PASSWORD`
- `BACKEND_INTERNAL_TOKEN`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Backend

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `OPENAI_API_KEY`
- `BACKEND_INTERNAL_TOKEN`
- `IMAGE_LIBRARY_ASSET_DIR=/data/media/library`

## Persistent media storage

The Compose file mounts one shared volume:

- `frontend` -> `/app/public/media/library`
- `backend` -> `/data/media/library`

Before the first public launch, copy the current local image library into that volume so existing `/media/library/*` URLs resolve immediately after deployment.

## Runtime shape

- Public website and editor run through Next.js
- Browser calls go to same-origin Next.js routes under `/api/*`
- Next.js proxies CMS requests to the internal FastAPI service at `http://backend:8000`
- FastAPI is not exposed publicly
