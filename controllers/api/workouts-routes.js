const router = require('express').Router();
const { Workout } = require('../../models');

// The `/api/workouts` endpoint

router.get('/', async (req, res) => {
  try {
    const workoutData = await Workout.find({});
    res.status(200).json(workoutData); 
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const workoutData = await Workout.find({ _id: req.params.id});
    res.status(200).json(workoutData); 
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const workoutData = await Workout.find({});
    res.status(200).json(workoutData); 
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const workoutData = await Workout.find({ _id: req.params.id});
    res.status(200).json(workoutData); 
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;