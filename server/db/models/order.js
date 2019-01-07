const Sequelize = require('Sequelize')
const db = require('../db')

const Order = db.define('order', {
  totalCost: {
    type: Sequelize.INTEGER
  },
  shippingAddress: {
    type: Sequelize.STRING,
  },
  billingAddress: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.ENUM('complete', 'pending')
  },
  userId: {
    type: Sequelize.INTEGER,
  }
})

Order.prototype.totalPrice = async function(){
  await CartItem.find
}

module.exports = Order
