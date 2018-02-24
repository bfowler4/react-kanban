
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`cards`, table => {
    table.increments();
    table.string(`title`).notNullable();
    table.enu(`priority`, [`low`, `medium`, `high`, `blocker`]);
    table.enu(`status`, [`queue`, `progress`, `done`]).defaultTo(`queue`);
    table.string(`created_by`);
    table.string(`assigned_to`);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`cards`);
};
