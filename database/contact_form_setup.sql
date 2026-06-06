-- Contact Form Database Setup
-- Import this file in phpMyAdmin to create database and tables

CREATE DATABASE IF NOT EXISTS `AutoScanOra`;

USE `AutoScanOra`;

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `firstName` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `subject` VARCHAR(255) NOT NULL,
  `message` LONGTEXT NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_email` (`email`),
  INDEX `idx_createdAt` (`createdAt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sample data (optional - delete if not needed)
INSERT INTO `contacts` (`firstName`, `lastName`, `email`, `subject`, `message`) VALUES
('Test', 'User', 'test@example.com', 'Test Message', 'This is a test message from the contact form.');
