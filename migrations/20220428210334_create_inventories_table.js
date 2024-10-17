export function up(knex) {
  return knex.schema.createTable('inventories', (table) => {
    table.increments('id').primary();
    table.integer('warehouse_id').unsigned().references('id').inTable('warehouses').onDelete('CASCADE');
    table.string('item_name').notNullable();
    table.text('description').notNullable();
    table.string('category').notNullable();
    table.integer('quantity').notNullable();
    table.string('status').notNullable();  // Add this line
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
}

export function down(knex) {
  return knex.schema.dropTable('inventories');
}