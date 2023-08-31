/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('state').del();
  await knex('state').insert([
    { id: 1, name: 'Acre', acronym: 'AC' },
    { id: 2, name: 'Alagoas', acronym: 'AL' },
    { id: 3, name: 'Amazonas', acronym: 'AM' },
    { id: 4, name: 'Amapá', acronym: 'AP' },
    { id: 5, name: 'Bahia', acronym: 'BA' },
    { id: 6, name: 'Ceará', acronym: 'CE' },
    { id: 7, name: 'Distrito Federal', acronym: 'DF' },
    { id: 8, name: 'Espírito Santo', acronym: 'ES' },
    { id: 9, name: 'Goiás', acronym: 'GO' },
    { id: 10, name: 'Maranhão', acronym: 'MA' },
    { id: 11, name: 'Minas Gerais', acronym: 'MG' },
    { id: 12, name: 'Mato Grosso do Sul', acronym: 'MS' },
    { id: 13, name: 'Mato Grosso', acronym: 'MT' },
    { id: 14, name: 'Pará', acronym: 'PA' },
    { id: 15, name: 'Paraíba', acronym: 'PB' },
    { id: 16, name: 'Pernambuco', acronym: 'PE' },
    { id: 17, name: 'Piauí', acronym: 'PI' },
    { id: 18, name: 'Paraná', acronym: 'PR' },
    { id: 19, name: 'Rio de Janeiro', acronym: 'RJ' },
    { id: 20, name: 'Rio Grande do Norte', acronym: 'RN' },
    { id: 21, name: 'Rondônia', acronym: 'RO' },
    { id: 22, name: 'Roraima', acronym: 'RR' },
    { id: 23, name: 'Rio Grande do Sul', acronym: 'RS' },
    { id: 24, name: 'Santa Catarina', acronym: 'SC' },
    { id: 25, name: 'Serjipe', acronym: 'SE' },
    { id: 26, name: 'São Paulo', acronym: 'SP' },
    { id: 27, name: 'Tocantins', acronym: 'TO' },
  ]);
};
