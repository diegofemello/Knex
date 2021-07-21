/* -- Update - Atualiza registros
update users set
first_name = 'Luiz',
last_name = 'Miranda'
where id between 119 and 121;

select * from users where id between 119 and 121; */

const knex = require('../database');

// const select = knex.from('users').where('id', '=', 60);
const update = knex.from('users').update({
  first_name: 'Luiz',
  last_name: 'Miranda',
}).where('id', '=', 60);

console.log(update.toString());

update.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});
