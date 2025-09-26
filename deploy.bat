@echo off
REM deploy.bat - one-click git add/commit/pull/push for main branch
REM Save this file in your project root. Double-click to run.

REM Ensure git is available
where git >nul 2>&1
if errorlevel 1 (
  echo ERROR: git not found in PATH. Install Git or add it to PATH.
  pause
  exit /b 1
)

REM cd to script directory (project root)
pushd "%~dp0"

REM check we are in a git repo
git rev-parse --git-dir >nul 2>&1
if errorlevel 1 (
  echo ERROR: This folder is not a git repository.
  pause
  popd
  exit /b 1
)

REM show current branch
for /f "tokens=*" %%b in ('git rev-parse --abbrev-ref HEAD') do set CUR_BRANCH=%%b
echo Current branch: %CUR_BRANCH%

REM check working tree status
git status --porcelain > "%TEMP%\git_status.tmp"
set /p dummy=<"%TEMP%\git_status.tmp"
if "%dummy%"=="" (
  echo No changes to commit.
  del "%TEMP%\git_status.tmp" >nul 2>&1
  popd
  pause
  exit /b 0
)

del "%TEMP%\git_status.tmp" >nul 2>&1

REM ask for commit message
set /p COMMIT_MSG=Enter commit message (leave empty for "update"): 
if "%COMMIT_MSG%"=="" set COMMIT_MSG=update

echo.
echo Staging changes...
git add -A
if errorlevel 1 (
  echo ERROR: git add failed.
  popd
  pause
  exit /b 1
)

echo Committing...
git commit -m "%COMMIT_MSG%" || (
  echo Nothing to commit (maybe changes only in submodules or identical).
)

echo Pulling remote changes (rebase)...
git pull --rebase origin %CUR_BRANCH%
if errorlevel 1 (
  echo.
  echo ERROR: git pull --rebase failed. There may be merge conflicts.
  echo Please resolve conflicts manually, then run this script again.
  popd
  pause
  exit /b 1
)

echo Pushing to origin/%CUR_BRANCH%...
git push origin %CUR_BRANCH%
if errorlevel 1 (
  echo ERROR: git push failed. Check credentials / network / remote URL.
  popd
  pause
  exit /b 1
)

echo.
echo Push succeeded. Vercel will auto-deploy after push.
popd
pause
exit /b 0
