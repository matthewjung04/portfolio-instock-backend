import pool from '../config/db.js';

async function seedDatabase() {
  try {
    const connection = await pool.getConnection();

    // Seed warehouses
    await connection.query(`
      INSERT INTO warehouses (warehouse_name, address, city, country, contact_name, contact_position, contact_email, contact_phone)
      VALUES 
        ('Manhattan', '503 Broadway', 'New York', 'USA', 'Parmin Aujla', 'Warehouse Manager', 'paujla@instock.com', '+1 (646) 123-1234'),
        ('Washington', '33 Pearl Street SW', 'Washington', 'USA', 'Greame Lyon', 'Warehouse Manager', 'glyon@instock.com', '+1 (646) 123-1234'),
        ('Jersey', '300 Main St', 'New Jersey', 'USA', 'Nazia Saz', 'Warehouse Manager', 'nsaz@instock.com', '+1 (646) 123-1234')
    `);

    // Seed inventories
    await connection.query(`
      INSERT INTO inventories (warehouse_id, item_name, description, category, quantity)
      VALUES 
        (1, 'Television', '60-inch 4K Ultra HD Smart LED TV', 'Electronics', 500),
        (1, 'Gym Bag', 'High-quality gym bag', 'Gear', 200),
        (2, 'Hoodie', 'Red cotton hoodie', 'Apparel', 100),
        (3, 'Keychain', 'Wooden keychain with leather strap', 'Accessories', 1000)
    `);

    console.log('Database seeding completed successfully');
    connection.release();
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit();
  }
}

seedDatabase();