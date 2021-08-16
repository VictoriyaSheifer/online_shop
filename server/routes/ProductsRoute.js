const express = require('express');
const router = express.Router();

const Products = require('../controllers/ProductsController')


router.get('/getAllProducts', Products.getAllProducts)
router.post('/insertProducts', Products.insertProducts)
router.post('/editProducts', Products.editProducts)

module.exports = router;