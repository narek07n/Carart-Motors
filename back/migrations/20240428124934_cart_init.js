/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.createTable('cart', (table) => {
    table.string("product_id", 255).primary();
    table.string("cart_id", 255).primary();
    table.string("user_id", 255).primary();
    table.integer("added_at");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable('cart')
};
