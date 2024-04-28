/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.string("session_id", 255).primary();
    table.string("user_id", 255).primary();
    table.string("email", 100).unique();
    table.string("nickname", 100);
    table.string("password", 255);
    table.integer("role")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable("clients")
};
