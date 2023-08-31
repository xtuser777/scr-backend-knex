/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('parameterization', (table) => {
    table.increments('id').primary();
    table.integer('person_id').unsigned().notNullable();
    table.foreign('person_id').references('person.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('parameterization');
};
