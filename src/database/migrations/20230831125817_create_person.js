/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('person', (table) => {
    table.increments('id').primary();
    table.integer('type').notNullable();
    table.integer('individual_person_id').unsigned();
    table.integer('enterprise_person_id').unsigned();
    table.integer('contact_id').unsigned();
    table.foreign('individual_person_id').references('individual_person.id').onDelete('CASCADE');
    table.foreign('enterprise_person_id').references('enterprise_person.id').onDelete('CASCADE');
    table.foreign('contact_id').references('contact.id').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('person');
};
