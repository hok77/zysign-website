@echo off
echo ================================
echo ZySign Website Vercel Deployment
echo ================================
echo.

echo 1. Installing Vercel CLI...
npm install -g vercel

echo.
echo 2. Logging into Vercel...
echo Please complete the login process in your browser.
vercel login

echo.
echo 3. Deploying to Vercel...
echo Please follow the prompts to configure your project.
vercel

echo.
echo ================================
echo Deployment Complete!
echo ================================
echo.
echo Your website should now be live at the URL provided by Vercel.
echo You can manage your deployment at https://vercel.com/dashboard
echo.
pause