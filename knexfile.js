const { resolve } = require('path');

module.exports = {
  client: 'mysql2',
  connection: {
    database: 'scr',
    user: 'scr',
    password: 'scr123globo',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: resolve(__dirname, 'src', 'database', 'migrations'),
  },
  seeds: {
    directory: resolve(__dirname, 'src', 'database', 'seeds'),
  },
};
