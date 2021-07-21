/* -- limit limita a qtd de valores
-- offset desloca o cursor para exibir os resultados
select id, first_name, email as uemail
from users
where id between 100 and 150
order by id asc
limit 9,3; */

const knex = require('../database');

const select = knex('users')
  .select('id', 'first_name', 'salary')
  .orderBy('salary', 'asc')
  .orderBy('id', 'desc')
  .limit(5)
  .offset(2);

console.log(select.toString());

select.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});
