/* -- where filtra registros
-- operadores de comparação = < <= > >= <> !=
-- operadores lógicos and e or
select * from users
where
created_at < '2020-12-15 23:33:41'
and first_name = 'Luiz'
and password_hash = 'a_hash'; */

const knex = require('../database');

const select = knex('users')
  .select('*')
  // .where({ id: 10, first_name: 'Helena' });
  .where('salary', '>', 250)
  .andWhere('first_name', '=', 'Rosana')
  .orWhere('id', '=', 1);

console.log(select.toString());

select.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});
