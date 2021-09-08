const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UsersController')

router.post('/insertUser', UserController.insertUser);
router.get('/CheckIfExist', UserController.CheckIfExist);
router.post('/CheckCredentials', UserController.CheckCredentials);

module.exports = router;