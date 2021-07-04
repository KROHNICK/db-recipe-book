const express = require("express");
const router = express.Router();
const Recipes = require("../data/models/recipesModel");
const Dishes = require("../data/models/dishesModel");

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let recipe = await Recipes.getRecipe(req.params.id);
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({
        error: "Could not find a recipe."
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  if (!req.body.name || !req.body.dishId) {
    res.status(400).json({ error: "Please provide name and dishId." });
    return;
  }
  let dish = await Dishes.getDish(req.body.dishId);
  if (!dish) {
    res.status(404).json({
      error: "dishId does not exist."
    });
    return;
  }
  try {
    let createRecipe = await Recipes.addRecipe({
      name: req.body.name,
      dishId: req.body.dishId
    });
    let newRecipe = await Recipes.getRecipe(createRecipe[0]);
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  if (!req.body.name && !req.body.dishId) {
    res.status(400).json({
      error: "Please provide a name and dishId."
    });
    return;
  }
  if (req.body.dishId) {
    let dish = await Dishes.getDish(req.body.dishId);
    if (!dish) {
      res.status(404).json({
        error: "dishId does not exist."
      });
      return;
    }
  }
  try {
    let updateRecipe = await Recipes.updateRecipe(req.params.id, req.body);
    if (updateRecipe > 0) {
      let newRecipe = await Recipes.getRecipe(req.params.id);
      res.status(201).json(newRecipe);
    } else {
      res.status(404).json({ error: "Could not update recipe." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let deletedRecipe = await Recipes.deleteRecipe(req.params.id);
    if (deletedRecipe > 0) {
      res.status(204).json({
        message: "Recipe deleted."
      });
    } else {
      res.status(400).json({ error: "Could not find recipe." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
