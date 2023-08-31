/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('enterprise_person', (table) => {
    table.increments('id').primary();
    table.string('corporate_name', 100).notNullable();
    table.string('fantasy_name', 100).notNullable();
    table.string('cnpj', 18).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.createTable('enterprise_person');
};
