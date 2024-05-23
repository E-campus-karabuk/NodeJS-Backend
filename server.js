const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes/index");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const mongoUrl = process.env.PRODUCTION_MONGO_URL;
const port = process.env.DEV_PROT;

mongoose
  .connect(mongoUrl)
  .then(() => {
    app.listen(3060, () => {
      console.log("Server is running on port 3060");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err.message);
  });

// Routes
app.use("/api", routes);
