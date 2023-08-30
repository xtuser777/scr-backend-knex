/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('city', (table) => {
    table.increments('id').primary();
    table.string('name', 50).notNullable();
    table.integer('state_id').unsigned();
    table.foreign('state_id').references('state.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('city');
};
