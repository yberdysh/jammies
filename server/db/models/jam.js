const Sequelize = require('Sequelize')
const db = require('../db')
const _ = require('lodash')
// const {Review} = require('./review')

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

// Jam.prototype.averageStars = async function(){
//   const reviews = await Review.findAll({
//     where: {jamId: this.id}
//   })

//   if (reviews.length){
//     const count = reviews.length
//     const sum = reviews.reduce((accum, currentVal) => {
//       return accum + currentVal.numStars
//     }, 0)
//     const average = _.round(sum/count, 1)
//     return average
//   } else {
//     return 0;
//   }
// }

module.exports = Jam

// materials for another table
// reviews for another table

