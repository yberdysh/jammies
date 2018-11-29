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
  console.log("DAT JAM", Jam)
  console.log('REVIEW', review)
  try {
    const jam = await Jam.findById(review.jamId)
    let reviewsRes = await Review.findAll({
      where: {jamId: review.jamId}
    })
    console.log("REVIEWS RES", reviewsRes)

    console.log("REVIERS RES ARRAY?", Array.isArray(reviewsRes))

    console.log("OBJECT KEYS OF REVIEWS RES", Object.keys(reviewsRes))

    const reviews = Object.keys(reviewsRes).map(
        review => reviewsRes[review].dataValues
      )

    console.log("REVIEWS", reviews)

    const count = reviews.length
    const sum = reviews.reduce((accum, currentVal) => {
        return accum + currentVal.numStars
    }, 0)
    const average = _.round(sum/count, 1)
    jam.update({numStars: average})
  } catch(e) {
    console.error(e)
  }


  // if (reviews.length){
  //   const count = reviews.length
  //   const sum = reviews.reduce((accum, currentVal) => {
  //     return accum + currentVal.numStars
  //   }, 0)
  //   const average = _.round(sum/count, 1)
  //   return average
  // } else {
  //   return 0;
  // }
});

// const averageRating = async review => {
//   try {
//     // pass in the review right after its created
//     const jellyP = Jelly.findById(review.jellyId)
//     // find the jelly by the review's jelly id
//     const reviewsP = Review.findAll({
//       where: {jellyId: review.jellyId}
//     })
//     // find all the reviews for that jellyID

//     const [jellyRes, reviewsRes] = await Promise.all([jellyP, reviewsP])

//     const reviews = Object.keys(reviewsRes).map(
//       keys => reviewsRes[keys].dataValues
//     )

//     let rating = reviews.reduce((a, b) => a + b.starRating, 0) / reviews.length
//     rating = Math.round(rating * 10) / 10

//     jellyRes.update({rating})
//   } catch (e) {
//     console.error(e)
//   }
// }

// Review.afterCreate(averageRating)

module.exports = Review
