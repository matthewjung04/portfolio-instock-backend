export function up(knex) {
    return knex.schema.createTable('inventories', (table) => {
      table.increments('id').primary();
      table.integer('warehouse_id').unsigned().references('id').inTable('warehouses');
      table.string('item_name').notNullable();
      table.text('description').notNullable();
      table.string('category').notNullable();
      table.decimal('quantity', 10, 2).notNullable();
      table.timestamps(true, true);
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable('inventories');
  }