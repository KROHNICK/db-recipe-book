exports.up = function(knex, Promise) {
  return knex.schema.createTable("rec-ing", function(tbl) {
    tbl.increments();
    tbl.float("quantity");
    tbl
      .integer("recipeId")
      .unsigned()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("ingredientId")
      .unsigned()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("rec-ing");
};
