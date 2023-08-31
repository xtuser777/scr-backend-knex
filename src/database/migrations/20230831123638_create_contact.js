/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('contact', (table) => {
    table.increments('id').primary();
    table.string('phone', 14).notNullable();
    table.string('cellphone', 15).notNullable();
    table.string('email', 150).notNullable();
    table.integer('address_id').unique().unsigned();
    table.foreign('address_id').references('address.id').onUpdate('CASCADE').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('contact');
};
