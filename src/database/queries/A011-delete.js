/* -- Delete apaga registros da tabela
DELETE FROM users where id = 115;

-- Aviso: use SELECT para garantir que está
-- apagando os valores corretos
select * from users where id BETWEEN 110 and 115; */

const knex = require('../database');

// const select = knex('users').whereBetween('id', [70, 79]);
const deleteSql = knex('users').delete().whereBetween('id', [72, 75]);

// console.log(select.toString());
console.log(deleteSql.toString());

deleteSql.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});
