/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('level').del();
  await knex('level').insert([
    { description: 'Administrador' },
    { description: 'Gerente' },
    { description: 'Operacional' },
  ]);
};
