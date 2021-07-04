const db = require("../db");

const getRecipes = () => {
  return db
    .select(
      "recipes.id as RecipeId",
      "recipes.name as Recipe",
      "dishes.id as DishId",
      "dishes.name as Dish"
    )
    .from("recipes")
    .innerJoin("dishes", "dishes.id", "recipes.dishId");
};

const getRecipe = id => {
  return db("recipes")
    .where({ id })
    .first();
};

const addRecipe = recipe => {
  return db("recipes").insert(recipe);
};

const updateRecipe = (id, recipe) => {
  return db("recipes")
    .where({ id })
    .update(recipe);
};

const deleteRecipe = id => {
  return db("recipes")
    .where({ id })
    .del();
};

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe
};
