const router = require('express').Router();
const Workout = require('../../models/workout');

// The `/api/workouts` endpoint
router.get('/range', (req, res) => {
    Workout.find({})
    .then(workoutData => {
      res.status(200).json(workoutData); 
    })
    .catch(err => {
    res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
  Workout.findById(req.params.id)
  .then(workoutData => {
    res.status(200).json(workoutData); 
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.post('/', ({ body }, res) => {
  const ex = [];
  body.exercises.forEach(e => {
    ex.push(e);
  });
 Workout.create({exercises: ex})
    .then(workoutData => {
      res.status(200).json(workoutData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  Workout.findById(req.params.id)
  .then (workoutData => {
    const ex = workoutData.exercises;
    req.body.exercises.forEach(e => {
      ex.push(e);
    });
//    Workout.findOneAndUpdate({ _id: req.params.id }, {exercises: ex});
    console.log(ex);
    res.status(200).json(workoutData);
  }) 
  .catch(err => {
    res.status(500).json({message: err});
  })
});

router.get('/', (req, res) => {
  Workout.find({})
  .then(workoutData => {
    res.status(200).json(workoutData); 
  })
  .catch(err => {
  res.status(500).json(err);
  })
});


module.exports = router;