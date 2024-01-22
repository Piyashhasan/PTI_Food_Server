require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const foodRoute = require("./routes/foodRoutes");
const app = express();
const PORT = process.env.SERVER_PORT;

// --- middle ware ---
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Database connection ---
const dbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.cyt53e1.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("DB Connection Successfully");
  } catch (error) {
    console.log("Error from database connection");
    console.log(error.message);
  }
};

// --- API ---
// **** food api ****
app.use("/food", foodRoute);

// --- root api ---
app.get("/", (req, res) => {
  res.send("Hello World");
});

// --- Server Listening ---
app.listen(PORT, async () => {
  try {
    console.log(`Server is running at - ${PORT}`);
    dbConnection();
  } catch (error) {
    console.log("Error from server listening");
    console.log(error.message);
  }
});
