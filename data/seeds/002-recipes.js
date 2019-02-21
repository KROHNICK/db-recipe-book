exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, name: "Cheesy Fries", dishId: 1 },
        { id: 2, name: "Seasoned Fries", dishId: 1 },
        { id: 3, name: "Cheesy Baked Potato", dishId: 2 },
        { id: 4, name: "Seasoned Baked Potato", dishId: 2 },
        { id: 5, name: "Cheesy Mashed Potato", dishId: 3 },
        { id: 6, name: "Seasoned Mashed Potato", dishId: 3 }
      ]);
    });
};
