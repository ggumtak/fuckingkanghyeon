@echo off
chcp 65001 >nul
title GitHub Pull
cd /d "%~dp0.."

echo.
echo === GitHub Pull (원격 저장소에서 최신 버전 가져오기) ===
echo.

git fetch origin
git reset --hard origin/main

echo.
echo === Done! 최신 버전으로 업데이트 완료 ===
echo.
pause
