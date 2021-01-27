const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/user");

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRoutes);

mongoose.connect(process.env.MONGO_DB_CONNECTION_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  console.log("Error connection to MongoDB", err);
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(process.env.PORT, (req, res) =>
  console.log(`Listening on Port ${process.env.PORT}!`)
);
