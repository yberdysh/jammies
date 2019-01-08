const router = require('express').Router()
const {CartItem, Order} = require('../db/models')
// const {Order, Product, User} = require('../db/models')
module.exports = router

router.use( async (req,res,next) => {
  let cart;
  const search = {status: 'pending'}
  // IF CART ID ON SESSION, add id to search that's the cartId/orderId
  if (req.session.cartId) {
    console.log("guest user")
    console.log('here', req.session.cartId)
    search.id = req.session.cartId
  }
  // IF USER ON REQ OBJ, ADD USERID TO SEARCH OBJ
  else if (req.user){
    console.log("realy user")
    search.userId = req.user.id
  }
  // IF NO USER ON REQ OR CARTID ON SESSION, CREATE NEW CART (WHICH IS AN ORDER)
  if (!req.user && !req.session.cartId){
    console.log("first time user")
    cart = await Order.create(search)
  } else {
    // if either session.cartId or user logged in, find or create their cart
    cart = await Order.findOrCreate({ where: search })
    .then(([foundOrCreatedCart]) => {
      console.log("other stuff")
      if (req.user && req.session.cartId && !foundOrCreatedCart.userId)
        return foundOrCreatedCart
          .update({userId: req.user.id,
            billingAddress: req.user.billingAddress,
            shippingAddress: req.user.shippingAddress})
      return foundOrCreatedCart
    })
    .catch(next)

}
// put that cart on their request
  req.cart = cart
  if (req.cart)
    req.session.cartId = cart.id
  next()
  })

router.get('/', (req,res,next) => {
  console.log("getting cart...")
  res.json(req.cart)
  // res.json(req.cart)
})


