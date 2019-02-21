exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { id: 1, name: "Fries" },
        { id: 2, name: "Baked Potato" },
        { id: 3, name: "Mashed Potato" }
      ]);
    });
};
