@echo off
REM MySQL Contact Form Database Setup Script for Windows
REM This script initializes the MySQL database for the contact form

echo.
echo ========================================
echo Contact Form Database Setup
echo ========================================
echo.

REM Read .env.local and set variables
for /f "tokens=1,* delims==" %%a in (.env.local) do (
    if "%%a"=="DB_HOST" set DB_HOST=%%b
    if "%%a"=="DB_PORT" set DB_PORT=%%b
    if "%%a"=="DB_USER" set DB_USER=%%b
    if "%%a"=="DB_PASSWORD" set DB_PASSWORD=%%b
    if "%%a"=="DB_NAME" set DB_NAME=%%b
)

REM Default values if not set
if not defined DB_HOST set DB_HOST=localhost
if not defined DB_PORT set DB_PORT=3306
if not defined DB_USER set DB_USER=root
if not defined DB_NAME set DB_NAME=contact_form_db

echo Database Configuration:
echo   Host: %DB_HOST%
echo   Port: %DB_PORT%
echo   User: %DB_USER%
echo   Database: %DB_NAME%
echo.

REM Execute MySQL commands
mysql -h %DB_HOST% -P %DB_PORT% -u %DB_USER% -p%DB_PASSWORD% << EOF
CREATE DATABASE IF NOT EXISTS `%DB_NAME%`;

USE `%DB_NAME%`;

CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message LONGTEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_createdAt (createdAt)
);

EOF

if %ERRORLEVEL% EQU 0 (
    echo.
    echo Database and tables created successfully!
    echo.
) else (
    echo.
    echo Error creating database. Please check your credentials.
    echo.
    exit /b 1
)

echo ========================================
echo Setup Complete!
echo ========================================
echo.
pause
