import knex from 'knex';
import path from 'path';

//knex - usa js para escreve sql
//migrations - controla a versão do db

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true,
})

export default db;