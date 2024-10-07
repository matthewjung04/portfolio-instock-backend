import knex from 'knex';
import knexConfig from './knexfile.js';

const db = knex(knexConfig);

async function testConnection() {
  try {
    const result = await db.raw('SELECT 1+1 AS result');
    console.log('Database connection successful');
    console.log('Test query result:', result[0][0].result);

    const warehouses = await db('warehouses').select('*');
    console.log('Warehouses:', warehouses);

    const inventories = await db('inventories').select('*');
    console.log('Inventories:', inventories);
  } catch (error) {
    console.error('Database connection failed:', error);
  } finally {
    await db.destroy();
  }
}

testConnection();