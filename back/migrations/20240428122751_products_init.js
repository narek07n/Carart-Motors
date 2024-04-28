/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id")
    table.string("product_id", 255).primary();
    table.string("cart_id", 255).primary().defaultTo(null);
    table.float("price").defaultTo(0);
    table.string("img_url", 255);
    table.integer("created_at");
    table.string("name", 100);
    table.text("descr");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable("products")
};
