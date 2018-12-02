const Sequelize = require('Sequelize')
const db = require('../db')
const Jam = require('./jam')
const _ = require("lodash")

const Review = db.define('review', {
  numStars: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  },
  content: {
    type: Sequelize.TEXT
  }
})

Review.hook('afterCreate', async review => {
  try {
    const jam = await Jam.findById(review.jamId)
    let reviewsRes = await Review.findAll({
      where: {jamId: review.jamId}
    })
    const reviews = Object.keys(reviewsRes).map(
        review => reviewsRes[review].dataValues
      )
    const count = reviews.length
    const sum = reviews.reduce((accum, currentVal) => {
        return accum + currentVal.numStars
    }, 0)
    const average = _.round(sum/count, 1)
    jam.update({numStars: average})
  } catch(e) {
    console.error(e)
  }
})

module.exports = Review
