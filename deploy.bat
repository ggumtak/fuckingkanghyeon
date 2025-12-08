@echo off
chcp 65001 >nul
title GitHub Deploy
cd /d "%~dp0"

echo.
echo === GitHub Pages Deploy ===
echo.

git config user.email 2>nul || git config --global user.email "ggumtak@users.noreply.github.com"
git config user.name 2>nul || git config --global user.name "ggumtak"

if not exist ".git" git init
git remote remove origin 2>nul
git remote add origin https://github.com/ggumtak/testpractice.git

git add .
git commit -m "Update %date% %time:~0,5%" 2>nul
git branch -M main
git push -u origin main --force

echo.
echo === Done! ===
echo URL: https://ggumtak.github.io/testpractice/quiz.html
echo.
pause