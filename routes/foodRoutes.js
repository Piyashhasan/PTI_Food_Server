const express = require("express");
const {
  addFoodItem,
  getAllFoodItems,
} = require("../controllers/foodControllers");
const foodRoute = express.Router();

// #POST FOOD ITEM
foodRoute.post("/", addFoodItem);

// #GET FOOD ALL ITEM
foodRoute.get("/", getAllFoodItems);

module.exports = foodRoute;
