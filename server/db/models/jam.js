const Sequelize = require('Sequelize')
const db = require('../db')
const _ = require('lodash')

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
    validate: { len: [3, 50] }
  },
  numInStock: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {min: 0}
  },
  description: {
    type: Sequelize.TEXT,
    notEmpty: true,
    notNull: true
  },
  numStars: {
    type: Sequelize.DECIMAL,
    defaultValue: 0
  },
  image: {
    type: Sequelize.STRING
  }
})

module.exports = Jam


