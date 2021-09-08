const express = require('express');
const router = express.Router();

const Products = require('../controllers/ProductsController')


router.get('/getAllProducts', Products.getAllProducts)
router.post('/getProductsByCategory', Products.getProductsByCategory)
router.post('/insertProducts', Products.insertProducts)
router.post('/editProducts', Products.editProducts)
router.get('/getNumberOfProducts', Products.getNumberOfProducts)

module.exports = router;