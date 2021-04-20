const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: String,
  type: String,
  weight: Number,
  sets: Number,
  reps: Number,
  duration: Number,
  distance: Number
});


const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [ExerciseSchema]
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
