const db = require("../db");

const getDishes = () => {
  return db("dishes");
};

const addDish = dish => {
  return db("dishes").insert(dish);
};

const getDish = async id => {
  let dish = await db("dishes")
    .where({ id })
    .first();
  if (!dish) {
    return null;
  }
  let recipes = await db("recipes").where({ dishId: id });
  dish.recipes = recipes;
  return dish;
};

const updateDish = (id, dish) => {
  return db("dishes")
    .where({ id })
    .update(dish);
};

const deleteDish = id => {
  return db("dishes")
    .where({ id })
    .del();
};

module.exports = {
  getDishes,
  addDish,
  getDish,
  updateDish,
  deleteDish
};
