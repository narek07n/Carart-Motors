/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.createTable("admins", (table) => {
    table.increments("id");
    table.string("session_id", 255).primary();
    table.string("admin_id", 255).primary();
    table.string("nickname", 100);
    table.string("password", 255);
    table.string("email", 100);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable("admins")
};
