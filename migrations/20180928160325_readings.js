
exports.up = function(knex, Promise) {
  return knex.schema.createTable('readings', table => {
    table.increments('id').primary();
    table.integer('bg');
    table.integer('insulin');
    table.string('note');
    table.timestamp('time').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('readings');
};
