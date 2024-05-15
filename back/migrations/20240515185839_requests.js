/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.createTable("requests", (table) => {
    table.increments('id')
    table.string('product_id', 255)
    table.string('user_id', 255)
    table.integer('status')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable("requests")
};
