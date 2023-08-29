const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to get all comments for a specific post
router.get('/:postId', authMiddleware.requireAuth, commentController.getCommentsForPost);

// Route to create a new comment for a specific post
router.post('/:postId', authMiddleware.requireAuth, commentController.createCommentForPost);

module.exports = router;
