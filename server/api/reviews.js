const router = require('express').Router()
const {Review} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let reviews = await Review.findAll({})
    // console.log("REVIEWS INSIDE ROUTES", reviews.length)
    console.log("length of reviews", reviews.length)
    console.log("data type of reviews", Array.isArray(reviews))
    res.json(reviews)
  } catch(err) {
    next(err)
  }
})

