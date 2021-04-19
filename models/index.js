const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises: Array
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
