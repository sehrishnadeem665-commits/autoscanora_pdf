# Contact Form Database Setup Guide

This guide will help you set up the MySQL database for your contact form.

## Prerequisites

- MySQL Server (version 5.7 or higher recommended)
- MySQL Command Line Client installed and in PATH
- Node.js and npm installed

## Environment Configuration

The database configuration is stored in `.env.local`. Update these variables with your MySQL credentials:

```
DB_HOST=localhost          # MySQL server hostname
DB_PORT=3306              # MySQL server port (default 3306)
DB_USER=root              # MySQL username
DB_PASSWORD=              # MySQL password (leave empty if no password)
DB_NAME=contact_form_db   # Database name to create
```

## Setup Steps

### Step 1: Update Environment Variables

Edit the `.env.local` file in the project root and add your MySQL credentials:

```bash
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=contact_form_db
```

### Step 2: Create Database (Windows)

Run the batch script to set up the database:

```bash
scripts\setup-db.bat
```

### Step 2: Create Database (Linux/macOS)

Run the shell script to set up the database:

```bash
chmod +x scripts/setup-db.sh
bash scripts/setup-db.sh
```

### Step 3: Verify Installation

You can verify the database was created by logging into MySQL:

```bash
mysql -h localhost -u root -p
```

Then run:

```sql
USE contact_form_db;
SHOW TABLES;
DESCRIBE contacts;
```

You should see the `contacts` table with the following columns:
- `id` - Primary key
- `firstName` - Visitor's first name
- `lastName` - Visitor's last name
- `email` - Visitor's email address
- `subject` - Message subject
- `message` - Message content
- `createdAt` - Submission timestamp
- `updatedAt` - Last update timestamp

## Manual Database Setup (Alternative)

If the scripts don't work, you can manually create the database and table:

```sql
CREATE DATABASE IF NOT EXISTS contact_form_db;

USE contact_form_db;

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
```

## API Endpoint

The contact form data is submitted to `/api/contact` endpoint using a POST request.

### Request Format

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Your message here"
}
```

### Response

**Success (201):**
```json
{
  "success": true,
  "message": "Message submitted successfully",
  "id": 1
}
```

**Error (400/500):**
```json
{
  "error": "Error message describing what went wrong"
}
```

## Development

### Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Test the Contact Form

1. Navigate to `http://localhost:3000/contact`
2. Fill out the form with test data
3. Submit the form
4. Check your MySQL database to verify the data was saved

```bash
mysql -u root contact_form_db
SELECT * FROM contacts;
```

## Troubleshooting

### "Can't connect to MySQL server"

- Make sure MySQL is running
- Verify your database credentials in `.env.local`
- Check that your MySQL user has proper permissions

### "Access denied for user"

- Verify username and password in `.env.local`
- Make sure the user exists in MySQL
- Check user privileges: `GRANT ALL PRIVILEGES ON contact_form_db.* TO 'your_user'@'localhost';`

### "Database already exists"

- The scripts use `CREATE DATABASE IF NOT EXISTS`, so you can safely re-run them
- To drop and recreate: `DROP DATABASE contact_form_db; FLUSH PRIVILEGES;`

### Port Connection Issues

- Default MySQL port is 3306
- If MySQL is running on a different port, update `DB_PORT` in `.env.local`

## Features

✅ Form validation (email format, required fields)
✅ Database indexing for email and creation date
✅ Timestamp tracking (created and updated)
✅ Error handling and user feedback
✅ Secure data submission via API

## Next Steps

1. ✅ Configure database credentials in `.env.local`
2. ✅ Run the setup script
3. ✅ Start the development server (`npm run dev`)
4. ✅ Test the contact form at `/contact`
5. ✅ Monitor submissions in your MySQL database

For more information, see the main [README.md](../README.md)
