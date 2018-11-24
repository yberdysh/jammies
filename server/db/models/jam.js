const Sequelize = require('Sequelize')
const db = require('../db')
const _ = require('lodash')
const Review = require('./review')

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
    async get() {
      console.log("av rating!!!!!!!!!!!", await this.averageStars())
      const avRating = await this.averageStars()
      return avRating
    }
    // get()
    // set(valueToBeSet) {
    //   console.log("setting being called!!!!!!!!!!!!!!!!!!", valueToBeSet)
    //   this.setDataValue('numStars', this.averageStars())
    // }
  },
  // getRating: {
  //   type: Sequelize.VIRTUAL,
    // async get() {
    //   console.log("av rating!!!!!!!!!!!", await this.averageStars())
    //   return await this.averageStars()
    // }
  // },
        // password: {
        // type: DataTypes.VIRTUAL,
        // set: (value) => {
        //   this.setDataValue('password', value) // Remember to set the data value, otherwise it won't be validated
        //   this.setDataValue('passwordHashed', bcrypt.hashSync(value, SECURITY_CONFIG.salts.password))
        // }

  image: {
    type: Sequelize.STRING
  }
}, {
    hooks: {
        beforeFind: function(jam, options) {
          console.log("DAT JAM", jam)
            // jam.numStars = 25
        }
    }
  })

Jam.prototype.averageStars = async function(){
  const reviews = await Review.findAll({
    where: {jamId: this.id}
  })

  if (reviews.length){
    const count = reviews.length
    const sum = reviews.reduce((accum, currentVal) => {
      return accum + currentVal.numStars
    }, 0)
    const average = _.round(sum/count, 1)
    return average
  } else {
    return 0;
  }
}

module.exports = Jam

// materials for another table
// reviews for another table

