const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

// prefix: '/user/'
router.get('/', userController.user);


module.exports = router;