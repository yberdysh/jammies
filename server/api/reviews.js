const router = require('express').Router()
const {Review} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let reviews = await Review.findAll({})
    res.json(reviews)
  } catch(err) {
    next(err)
  }
})

