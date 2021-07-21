exports.up = function (knex) {
  return knex.schema.alterTable('users', (table) => {
    table.string('pass_reset_token');
    table.dateTime('pass_reset_token_expires');
  });
};

exports.down = function (knex) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('pass_reset_token');
    table.dropColumn('pass_reset_token_expires');
  });
};
