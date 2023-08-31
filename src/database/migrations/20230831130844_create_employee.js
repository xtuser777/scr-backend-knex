/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('employee', (table) => {
    table.increments('id').primary();
    table.string('login', 15).notNullable();
    table.string('password_hash', 255).notNullable();
    table.integer('type').unsigned().notNullable();
    table.date('admission').notNullable();
    table.date('demission').nullable();
    table.integer('person_id').unsigned();
    table.integer('level_id').unsigned();
    table.timestamps(true, true);
    table.foreign('person_id').references('person.id').onDelete('CASCADE');
    table.foreign('level_id').references('level.id').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('employee');
};
