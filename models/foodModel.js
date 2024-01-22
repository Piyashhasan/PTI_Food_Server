const mongoose = require("mongoose");

// --- Schema make for Food Items ---
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
  },
  isRecommended: {
    type: Boolean,
  },
});

// --- Model make ---
const foodModel = mongoose.model("foodItems", foodSchema);

module.exports = foodModel;
