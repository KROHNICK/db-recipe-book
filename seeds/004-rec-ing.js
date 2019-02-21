exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("rec-ing")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("rec-ing").insert([
        // Cheesy Fries
        { id: 1, quantity: 2, recipeId: 1, ingredientId: 1 },
        // Cheesy Fries
        { id: 2, quantity: 1, recipeId: 1, ingredientId: 2 },
        // Seasoned Fries
        { id: 3, quantity: 2, recipeId: 2, ingredientId: 2 },
        // Seasoned Fries
        { id: 4, quantity: 1, recipeId: 2, ingredientId: 3 },
        // Cheesy Baked Potato
        { id: 5, quantity: 3, recipeId: 3, ingredientId: 1 },
        // Cheesy Baked Potato
        { id: 6, quantity: 2, recipeId: 3, ingredientId: 2 },
        // Seasoned Baked Potato
        { id: 7, quantity: 2, recipeId: 4, ingredientId: 1 },
        // Seasoned Baked Potato
        { id: 8, quantity: 4, recipeId: 4, ingredientId: 3 },
        // Cheesy Mashed Potato
        { id: 9, quantity: 4, recipeId: 5, ingredientId: 1 },
        // Cheesy Mashed Potato
        { id: 10, quantity: 3, recipeId: 5, ingredientId: 2 },
        // Seasoned Mashed Potato
        { id: 11, quantity: 5, recipeId: 6, ingredientId: 1 },
        // Seasoned Mashed Potato
        { id: 12, quantity: 3, recipeId: 6, ingredientId: 3 }
      ]);
    });
};
