const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// router.get('/exercise', (req, res) => {
//   if(req.query.id){
//     Workout.findById(req.query.id)
//     .then(workoutData => {
//       res.status(200).json(workoutData); 
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
  
//   } else {

//   }
// });
module.exports = router;