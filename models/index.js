const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises: []
});
const Workout = mongoose.model("Workout", WorkoutSchema);



// const ExerciseSchema = new Schema({
//   type: { type: String },
//   name: String,
//   duration: Number,
//   weight: Number,
//   reps: Number,
//   sets: Number,
//   distance: Number
// });
// const Exercise = mongoose.model("Exercise", ExerciseSchema);


module.exports = Workout;
