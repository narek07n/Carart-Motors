/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  knex.schema.table('requests', table => {
    table.string("request_id", 255)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  knex.schema.table("requests", (table) => {
    table.dropColumn("request_id");
  });
};
