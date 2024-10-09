import db from './src/db/db.js';

async function testDatabaseConnection() {
  try {
    // Test connection
    await db.raw('SELECT 1');
    console.log('Database connection successful.');

    // Test warehouses table
    const warehouses = await db('warehouses').select('*');
    console.log('Warehouses:', warehouses);

    // Test inventories table
    const inventories = await db('inventories').select('*');
    console.log('Inventories:', inventories);

    console.log('All tests passed successfully!');
  } catch (error) {
    console.error('Error testing database:', error);
  } finally {
    // Close the database connection
    await db.destroy();
  }
}

testDatabaseConnection();