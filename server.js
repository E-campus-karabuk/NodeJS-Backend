const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes/index");
const path = require("path");
const cors = require("cors");

// Load environment variables from .env file
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const mongoUrl = process.env.PRODUCTION_MONGO_URL;
const port = process.env.DEV_PORT || 3060; // Fallback to 3060 if DEV_PORT is not defined

mongoose
  .connect(mongoUrl)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err.message);
  });

// Routes
app.use("/api", routes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
