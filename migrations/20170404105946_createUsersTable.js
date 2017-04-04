
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments().primary();
    table.string('full_name');
    table.string('username');
    table.text('img_url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
