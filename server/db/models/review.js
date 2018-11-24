const Sequelize = require('Sequelize')
const db = require('../db')

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

module.exports = Review

// materials for another table
// reviews for another table
