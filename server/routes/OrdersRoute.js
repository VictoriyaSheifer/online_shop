const express = require('express');
const router = express.Router();

const Orders = require('../controllers/OrdersController')

router.post('/getAllUsersOrders', Orders.getAllUsersOrders)
router.post('/insertOrders', Orders.insertOrders)
router.post('/checkDate', Orders.checkDate)
router.get('/getNumOfOrders', Orders.getNumOfOrders)

module.exports = router; 