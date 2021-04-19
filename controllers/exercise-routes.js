const router = require('express').Router();
const { Workout } = require('../models');

// The `/exercise` endpoint

router.get('', async (req, res) => {
  if (req.query.id){
    try {
      const workoutData = await Workout.find({ _id: req.params.id});
      res.status(200).json(workoutData); 
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    try {
      const workoutData = await Workout.find({ });
      res.status(200).json(workoutData); 
    } catch (error) {
      res.status(500).json(error);
    }
  }
});


module.exports = router;