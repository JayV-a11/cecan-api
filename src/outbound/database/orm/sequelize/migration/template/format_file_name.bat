@echo off
setlocal enabledelayedexpansion

REM Caminho da pasta onde estão os arquivos .js
set "folder=C:\Users\joaov\Downloads\cecan-api-main\src\outbound\database\orm\sequelize\migration"

REM Mudar para o diretório especificado
cd /d "%folder%"

REM Loop através de todos os arquivos .js na pasta
for %%f in (*.js) do (
    REM Renomear arquivo para ter a extensão .cjs
    ren "%%f" "%%~nf.cjs"
)

echo Todos os arquivos .js foram renomeados para .cjs na pasta %folder%
pause
