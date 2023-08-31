/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('client', (table) => {
    table.increments('id').primary();
    table.string('register', 10).notNullable();
    table.integer('person_id').unsigned().notNullable();
    table.timestamps(true, true);
    table.foreign('person_id').references('person.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('client');
};
