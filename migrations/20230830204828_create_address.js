/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('address', (table) => {
    table.increments('id').primary();
    table.string('street', 150).notNullable();
    table.string('number', 5).notNullable();
    table.string('neighborhood', 50).notNullable();
    table.string('complement', 30).notNullable();
    table.string('code', 10).notNullable();
    table.integer('city_id').unsigned();
    table.foreign('city_id').references('city.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('address');
};
