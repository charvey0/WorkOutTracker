const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Type of exercise required"
      },
      name: {
        type: String,
        required: "Name of exercise required"
      },
      duration: {
        type: Number,
        required: "Duration of exercise required"
      },
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    }
  ]
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
