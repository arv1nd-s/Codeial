const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

// prefix: '/user/'
router.get('/', userController.user);

router.get('/profile', userController.profile);

module.exports = router;