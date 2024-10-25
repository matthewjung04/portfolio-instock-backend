# InStock Backend API

## Project Overview
A RESTful API for warehouse and inventory management system built with Node.js, Express, and MySQL. The system manages warehouses and their associated inventories through various API endpoints.

## Technical Stack
- Node.js
- Express.js
- MySQL (Database)
- Knex.js (SQL Query Builder)

## Core Components

### 1. Database Structure
Two main tables:
- Warehouses: Stores warehouse information
- Inventories: Stores inventory items with warehouse associations

### 2. Project Structure
```
instock-backend/
├── controllers/
│   ├── inventory-controller.js
│   └── warehouse-controller.js
├── routes/
│   ├── inventories.js
│   └── warehouses.js
├── migrations/
│   ├── create_warehouses_table.js
│   └── create_inventories_table.js
├── seeds/
│   ├── 01_warehouses.js
│   └── 02_inventories.js
├── utils/
│   ├── validators.js
│   └── logger.js
├── db.js
├── knexfile.js
└── server.js
```

### 3. Key Components Explanation

#### Database Configuration (db.js & knexfile.js)
- Handles database connection using Knex
- Manages different environments (development, production)
- Sets up connection parameters from environment variables

#### Server Configuration (server.js)
- Express application setup
- Middleware configuration (CORS, JSON parsing)
- Route registration
- Error handling
- Server initialization

#### Controllers
Handle business logic for:
1. Warehouse Operations:
   - CRUD operations for warehouses
   - Inventory retrieval for specific warehouses

2. Inventory Operations:
   - CRUD operations for inventory items
   - Warehouse association management

#### Routes
Define API endpoints:
1. Warehouse Routes:
   ```
   GET    /api/warehouses
   POST   /api/warehouses
   GET    /api/warehouses/:id
   PUT    /api/warehouses/:id
   DELETE /api/warehouses/:id
   GET    /api/warehouses/:id/inventories
   ```

2. Inventory Routes:
   ```
   GET    /api/inventories
   POST   /api/inventories
   GET    /api/inventories/:id
   PUT    /api/inventories/:id
   DELETE /api/inventories/:id
   ```

#### Data Validation
Input validation for:
- Warehouse data (name, contact information, address)
- Inventory data (item details, quantities, warehouse association)

#### Error Handling
- Request validation errors
- Database operation errors
- Not found errors
- Server errors

## Setup Instructions

### 1. Environment Setup
```bash
# Clone repository
git clone [repository-url]
cd instock-backend

# Install dependencies
npm install
```

### 2. Database Configuration
Create a `.env` file:
```
PORT=8080
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database_name
```

### 3. Database Setup
```bash
# Run migrations
npm run migrate

# Seed database
npm run seed
```

### 4. Running the Application
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Documentation

### Warehouse Endpoints

#### GET /api/warehouses
- Returns all warehouses
- Response: Array of warehouse objects

#### POST /api/warehouses
- Creates new warehouse
- Required fields: warehouse_name, address, city, country, contact details
- Response: Created warehouse object

#### GET /api/warehouses/:id
- Returns specific warehouse
- Response: Warehouse object or 404

#### PUT /api/warehouses/:id
- Updates warehouse information
- Response: Updated warehouse object

#### DELETE /api/warehouses/:id
- Removes warehouse
- Response: 204 No Content

#### GET /api/warehouses/:id/inventories
- Returns all inventory items for specific warehouse
- Response: Array of inventory objects

### Inventory Endpoints

#### GET /api/inventories
- Returns all inventory items
- Response: Array of inventory objects

#### POST /api/inventories
- Creates new inventory item
- Required fields: warehouse_id, item_name, description, category, status, quantity
- Response: Created inventory object

#### GET /api/inventories/:id
- Returns specific inventory item
- Response: Inventory object or 404

#### PUT /api/inventories/:id
- Updates inventory information
- Response: Updated inventory object

#### DELETE /api/inventories/:id
- Removes inventory item
- Response: 204 No Content

## Error Handling
All endpoints return appropriate error responses:
- 400: Bad Request (validation errors)
- 404: Not Found
- 500: Server Error

## Development Notes
- Database queries use Knex.js for SQL generation
- Input validation is performed before database operations
- Console logging for development debugging
- CORS enabled for cross-origin requests
- Environment variables for configuration

## Database Schema

### Warehouses Table
```sql
- id (PRIMARY KEY)
- warehouse_name
- address
- city
- country
- contact_name
- contact_position
- contact_phone
- contact_email
- created_at
- updated_at
```

### Inventories Table
```sql
- id (PRIMARY KEY)
- warehouse_id (FOREIGN KEY)
- item_name
- description
- category
- status
- quantity
- created_at
- updated_at
```

This backend implementation provides a complete RESTful API for warehouse and inventory management with proper error handling, data validation, and database operations.