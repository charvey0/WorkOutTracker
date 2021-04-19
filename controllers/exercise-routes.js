const router = require('express').Router();
const { Workout } = require('../models');

// The `/exercise` endpoint

router.get('exercise', async (req, res) => {
    res.json({message: "Get / works!"})
  // find all workouts
//  try {
//    const categoryData = await Category.findAll({
//      include: [{
  // be sure to include its associated Product data
//  model: Product,
//      }]
//    });
//    res.status(200).json(categoryData);

//  } catch (err) {
//    res.status(500).json(err);
//  }
});

router.get('exercise?', async (req, res) => {
    res.json({message: "Get ? works!"})
    //  console.log(req.params.id);    
  // find one category by its `id` value
//  try {
//    const categoryData = await Category.findByPk(req.params.id, {
  // be sure to include its associated Products
//  include: [{
//        model: Product,
//      }]
//    });

//    if (!categoryData) {
//      res.status(404).json({
//        message: 'Invalid category id.  Please try again.'
//      });
//      return;
//    }
//    res.status(200).json(categoryData);

//  } catch (err) {
//    res.status(500).json(err);
//  }

});


module.exports = router;
