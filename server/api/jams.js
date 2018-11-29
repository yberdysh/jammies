const router = require('express').Router()
const {Jam} = require('../db/models')
const {Review} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let jams = await Jam.findAll({})
    res.json(jams)
  } catch(err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const jams = await Jam.find({
      where: {
        id: req.params.id
      }
    })
    res.json(jams)
  } catch(err) {
    next(err)
  }
})

router.get('/:id/reviews', async (req, res, next) => {
  try {
    let reviews = await Review.findAll({
      where: {
        jamId: req.params.id
      }
    })
    res.json(reviews)
  } catch(err) {
    next(err)
  }
})
