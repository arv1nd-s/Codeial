const express = require('express');
const router = express.Router();
const postController = require('../controllers/post_controller');

router.get('/', postController.post);
router.get('/view', postController.view);


module.exports = router;