

cls
@echo off
@echo ========================================================================================================
@echo  (if npm is not found, make sure you install nodejs: https://nodejs.org) 
@echo =========================================================================================================

REM # clean compontents folder
call rmdir "./node_modules" /s /q

SET LOCK="0 - install.lock"

if exist %LOCK% (
    echo installation is currently running
    GOTO :EXIT
)

(echo lock file while "0 - install.bat" is running) > %LOCK%

if /i [%1]==[] GOTO :INSTALL
if /i [%1]==[i] GOTO :INSTALL
if /i [%1]==[g] GOTO :GENERATORS

:INSTALL
    @echo install
    @echo - npm    
    call npm ci

    GOTO :DONE
    
:DONE
    del /q %LOCK% >nul 2>&1
    @echo done!
    
:EXIT