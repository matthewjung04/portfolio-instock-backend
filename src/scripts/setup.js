import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function setupDatabase() {
  let connection;
  try {
    // Create a connection without specifying a database
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    });

    // Create the database if it doesn't exist
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
    console.log(`Database ${process.env.DB_NAME} created or already exists.`);

    // Use the database
    await connection.query(`USE ${process.env.DB_NAME}`);

    // Drop existing tables if they exist
    await connection.query(`DROP TABLE IF EXISTS inventories`);
    await connection.query(`DROP TABLE IF EXISTS warehouses`);

    // Create warehouses table
    await connection.query(`
      CREATE TABLE warehouses (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        warehouse_name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        contact_name VARCHAR(255) NOT NULL,
        contact_position VARCHAR(255) NOT NULL,
        contact_email VARCHAR(255) NOT NULL,
        contact_phone VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Create inventories table
    await connection.query(`
      CREATE TABLE inventories (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        warehouse_id INT UNSIGNED,
        item_name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        category VARCHAR(255) NOT NULL,
        quantity INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (warehouse_id) REFERENCES warehouses(id)
      )
    `);

    console.log('Database setup completed successfully');
  } catch (error) {
    console.error('Error setting up database:', error);
  } finally {
    if (connection) {
      await connection.end();
    }
    process.exit();
  }
}

setupDatabase();