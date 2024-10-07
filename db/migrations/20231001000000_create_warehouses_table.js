export function up(knex) {
    return knex.schema.createTable('warehouses', (table) => {
      table.increments('id').primary();
      table.string('warehouse_name').notNullable();
      table.string('address').notNullable();
      table.string('city').notNullable();
      table.string('country').notNullable();
      table.string('contact_name').notNullable();
      table.string('contact_position').notNullable();
      table.string('contact_email').notNullable();
      table.string('contact_phone').notNullable();
      table.timestamps(true, true);
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable('warehouses');
  }