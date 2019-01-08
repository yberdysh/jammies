const User = require('./user')
const Jam = require('./jam')
const Review = require('./review')
const Order = require('./order')
const CartItem = require('./cartItem.js')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

 Review.belongsTo(Jam)
 Review.belongsTo(User)
 Jam.hasMany(Review, { onDelete: 'cascade' })
 User.hasMany(Review, { onDelete: 'cascade' })
 Order.hasMany(CartItem)
 CartItem.belongsTo(Order)
 Order.belongsTo(User)



/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User,
  Jam,
  Review,
  Order,
  CartItem
}
