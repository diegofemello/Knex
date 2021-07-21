/* -- between seleciona um range
select * from users
where
created_at between
'2020-06-12 00:00:00'
and '2020-09-04 23:59:59'
and id between 163 and 210; */

const knex = require('../database');

const selectBetween = knex('users')
  .select('*')
  .whereBetween('id', [80, 83])
  .orWhereBetween('id', [26, 31])
  .andWhere('salary', '>=', 500);

console.log(selectBetween.toString());

selectBetween.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});
