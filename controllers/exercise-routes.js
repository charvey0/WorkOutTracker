const router = require('express').Router();
const { Workout } = require('../models');

// The `/exercise` endpoint

router.get('', async (req, res) => {
  if (req.query.id){
    res.json({message: "/exercise? works!"});
  } else {
    res.json({message: "/exercise works!"});
  }
});


module.exports = router;