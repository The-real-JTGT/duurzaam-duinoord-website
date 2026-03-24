@echo off
setlocal

set "ROOT=%~dp0"
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"

where npm >nul 2>nul
if errorlevel 1 (
  echo npm was not found on PATH.
  exit /b 1
)

where python >nul 2>nul
if errorlevel 1 (
  echo Python was not found on PATH.
  exit /b 1
)

if not exist "%ROOT%\frontend\node_modules" (
  echo Installing frontend dependencies...
  pushd "%ROOT%\frontend"
  call npm ci
  if errorlevel 1 exit /b 1
  popd
)

if not exist "%ROOT%\backend\.venv\Scripts\python.exe" (
  echo Creating backend virtual environment...
  pushd "%ROOT%\backend"
  python -m venv .venv
  if errorlevel 1 exit /b 1
  popd
)

echo Installing backend dependencies...
"%ROOT%\backend\.venv\Scripts\python.exe" -m pip install -r "%ROOT%\backend\requirements.txt"
if errorlevel 1 exit /b 1

if not exist "%ROOT%\backend\.env" (
  echo Warning: backend\.env was not found. The backend may not start correctly without it.
)

where wt >nul 2>nul
if not errorlevel 1 (
  wt new-tab --title "Frontend" -d "%ROOT%\frontend" powershell.exe -NoExit -Command "npm run dev" ; new-tab --title "Backend" -d "%ROOT%\backend" powershell.exe -NoExit -Command "& '%ROOT%\backend\.venv\Scripts\python.exe' -m uvicorn main:app --reload --host 127.0.0.1 --port 8000"
  if not errorlevel 1 (
    echo Frontend and backend are starting in Windows Terminal tabs.
    exit /b 0
  )
  echo Windows Terminal launch failed. Falling back to separate windows.
)

start "Frontend" powershell.exe -NoExit -Command "Set-Location '%ROOT%\frontend'; npm run dev"
start "Backend" powershell.exe -NoExit -Command "Set-Location '%ROOT%\backend'; & '%ROOT%\backend\.venv\Scripts\python.exe' -m uvicorn main:app --reload --host 127.0.0.1 --port 8000"

echo Frontend and backend are starting in separate windows.
exit /b 0
