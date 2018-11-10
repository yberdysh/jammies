const Sequelize = require('Sequelize')
const db = require('../db')

const Jam = db.define('jam', {
  price: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0.01,
      isDecimal: true
    }
  },
  name: {
    type: Sequelize.STRING,
    notNull: true,
    notEmpty: true,
    validate: { len: [5,32] }
  },
  numInStock: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {min: 0}
  },
  favorites: {
    type: Sequelize.INTEGER,
    validate: {min: 0},
    defaultValue: 0
  },
  description: {
    type: Sequelize.STRING,
    notEmpty: true,
    notNull: true
  },
  reviews: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {min: 0}
  },
  numStars: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {min: 0}
  },
  image: {
    type: Sequelize.STRING
  }
})

module.exports = Jam

// materials for another table
// reviews for another table

