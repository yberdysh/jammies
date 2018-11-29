const router = require('express').Router()
const {Jam} = require('../db/models')
const {Review} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let jams = await Jam.findAll({include: [Review]})
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
      },
      include: [Review]
    })
    res.json(jams)
  } catch(err) {
    next(err)
  }
})

