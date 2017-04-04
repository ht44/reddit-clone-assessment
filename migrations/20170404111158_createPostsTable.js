
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table.increments().primary();
    table.string('title');
    table.text('content');
    table.integer('user_id').references('id').inTable('users').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
