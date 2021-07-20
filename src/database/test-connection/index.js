const knex = require('../database');

knex('users')
  .then((data) => {
    console.log(data);
  })
  .catch((e) => { })
  .finally(() => {
    knex.destroy();
  });
