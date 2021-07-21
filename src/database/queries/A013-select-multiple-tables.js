/* -- Seleciona users.id, profiles.id, profiles.bio
-- profiles.description, users.first_name
-- da tabela users e da tabela profiles
-- onde o id do usuário for o mesmo que
-- o user_id de profiles
SELECT u.id as uid, p.id as pid,
p.bio, u.first_name
FROM users as u, profiles as p
WHERE u.id = p.user_id; */

const knex = require('../database');

const select = knex(
  knex.raw(
    '??, ??',
    ['users', 'profiles'],
  ),
).select('users.id', 'profiles.id', 'profiles.bio', 'users.first_name');

// console.log(select.toString());

select.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});
