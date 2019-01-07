const Sequelize = require('Sequelize')
const db = require('../db')

const CartItem = db.define('cartItem', {
  orderId: {
    type: Sequelize.INTEGER
  },
  productId: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER
  }
})

module.exports = CartItem
