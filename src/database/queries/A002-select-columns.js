/* -- Seleciona colunas
select
u.email uemail, u.id uid, u.first_name ufirst_name
from users as u; */

const knex = require('../database');

const select = knex('users as u').select('u.first_name', 'u.email as uemail', 'u.id as uid');

console.log(select.toString());

select.then((data) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const user of data) {
    console.log(user);
  }
}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});
