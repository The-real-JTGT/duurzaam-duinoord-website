# Local Dev Servers

From the repo root, run:

```powershell
.\start-dev.bat
```

That script will:

- install frontend deps only if `frontend\node_modules` is missing
- create `backend\.venv` only if it is missing
- install backend deps
- open frontend and backend dev servers in Windows Terminal tabs when possible
- fall back to separate windows if Windows Terminal is not available
