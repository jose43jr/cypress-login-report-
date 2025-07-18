@echo off
setlocal

for /f %%i in ('powershell -command "Get-Date -Format yyyy-MM-dd_HH-mm-ss"') do set timestamp=%%i

echo Cleaning old reports...
rd /s /q mochawesome-report
rd /s /q cypress\videos
rd /s /q cypress\screenshots

echo Running Cypress tests...
npx cypress run

echo Renaming report...
rename mochawesome-report mochawesome-report-%timestamp%

start "" "mochawesome-report-%timestamp%\mochawesome.html"

echo.
echo Test execution completed at %timestamp%
pause