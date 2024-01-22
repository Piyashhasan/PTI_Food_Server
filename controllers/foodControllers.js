const foodModel = require("../models/foodModel");

// --- Add Food Item ---
exports.addFoodItem = async (req, res) => {
  try {
    const { name, price, imageUrl, isPopular, isRecommended } = req.body;
    const newFoodItem = new foodModel({
      name,
      price,
      imageUrl,
      isPopular,
      isRecommended,
    });

    const saveNewFoodItem = await newFoodItem.save();
    if (!saveNewFoodItem) {
      res.send("Food not added to DB");
    } else {
      res.status(201).send({
        status: true,
        message: "Successfully Item added to DB",
      });
    }
  } catch (error) {
    console.log("Error from addFoodItem controller");
    console.log(error.message);
  }
};

// --- Get All Food Items ---
exports.getAllFoodItems = async (req, res) => {
  try {
    const allFoodItems = await foodModel.find({});
    if (!allFoodItems) {
      res.status(404).send({
        status: 200,
        message: "Food Items not found",
      });
    } else {
      res.status(200).send({
        status: true,
        foodItems: allFoodItems,
      });
    }
  } catch (error) {
    console.log("Error from getAllFoodItems controller");
    console.log(error.message);
  }
};
