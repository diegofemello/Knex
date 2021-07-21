/* -- in seleciona elementos entre os valores enviados
select * from users
where id in (110,115,120,125,130,1000,12200,1212545)
and first_name in ('Luiz', 'Keelie'); */

const knex = require('../database');

const selectBetween = knex('users')
  .select('id', 'first_name')
  .whereIn('id', [10, 20, 30, 40, 80])
  .orWhereIn('id', [50]);

console.log(selectBetween.toString());

selectBetween.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});
