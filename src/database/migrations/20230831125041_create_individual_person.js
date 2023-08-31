/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('individual_person', (table) => {
    table.increments('id').primary().notNullable();
    table.string('name', 150).notNullable();
    table.string('cpf', 14).notNullable();
    table.string('birth', 10).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('individual_person');
};
