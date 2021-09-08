const express = require('express');
const router = express.Router();

const CartItems = require('../controllers/CartItemsController')

router.post('/getAllCartItemsOfShoppingCart', CartItems.getAllCartItemsOfShoppingCart)
router.post('/editCartItems', CartItems.editCartItems)
router.post('/getLastShoppingCart', CartItems.getLastShoppingCart)
router.post('/updateShoppingCartToDone', CartItems.updateShoppingCartToDone)
router.post('/editShoppingCart', CartItems.editShoppingCart)
router.post('/addCartItem', CartItems.addCartItem)
router.post('/deleteCartItem', CartItems.deleteCartItem)
router.post('/updateQnt', CartItems.updateQnt)
router.post('/deleteShoppingCart', CartItems.deleteShoppingCart)
router.post('/deleteAllCartItemFromShoppingCart', CartItems.deleteAllCartItemFromShoppingCart)

module.exports = router; 