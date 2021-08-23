const express = require('express');
const router = express.Router();

const Categories = require('../controllers/CategoriesController')

router.get('/getAllCategories', Categories.getAllCategories)
router.post('/insertCategory', Categories.insertCategory)
router.post('/editCategories', Categories.editCategories)

module.exports = router; 