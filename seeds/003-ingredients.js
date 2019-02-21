exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "2 Potatos" },
        { id: 2, name: "1 Cup of Cheese" },
        { id: 3, name: "2 tbsp of Seasoning" }
      ]);
    });
};
