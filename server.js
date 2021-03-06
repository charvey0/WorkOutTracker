const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./controllers');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb+srv://charveyo:K23uTz7K3aRlvopd@cluster0.kotrz.mongodb.net/workout?retryWrites=true&w=majority", {

//mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
