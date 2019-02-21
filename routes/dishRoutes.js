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

module.exports = router;
