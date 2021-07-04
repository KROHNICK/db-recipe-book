const express = require("express");
const router = express.Router();
const Dishes = require("../data/models/dishesModel");

router.get("/", async (req, res) => {
  try {
    const dishes = await Dishes.getDishes();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dish = await Dishes.getDish(req.params.id);
    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({
        error: "Could not find dish."
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      error: "Please provide a name."
    });
    return;
  }
  try {
    let createDish = await Dishes.addDish({ name: req.body.name });
    let newDish = await Dishes.getDish(createDish[0]);
    res.status(201).json(newDish);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      error: "Please provide a name."
    });
    return;
  }

  try {
    let updatedDish = await Dishes.updateDish(req.params.id, {
      name: req.body.name
    });
    if (updatedDish > 0) {
      let newDish = await Dishes.getDish(req.params.id);
      res.status(201).json(newDish);
    } else {
      res.status(404).json({
        message: "Could not find dish."
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let deletedDish = await Dishes.deleteDish(req.params.id);
    if (deletedDish > 0) {
      res.status(204).json({
        message: "Dish deleted."
      });
    } else {
      res.status(404).json({
        message: "Could not find dish."
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
