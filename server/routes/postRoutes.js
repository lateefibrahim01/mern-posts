const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to get all posts
router.get('/', authMiddleware.requireAuth, postController.getAllPosts);

// Route to create a new post (requires authentication)
router.post('/', authMiddleware.requireAuth, postController.createPost);

// Route to update a post (requires authentication)
router.put('/:postId', authMiddleware.requireAuth, postController.updatePost);

// Route to delete a post (requires authentication)
router.delete('/:postId', authMiddleware.requireAuth, postController.deletePost);

// Route to like a post (requires authentication)
router.post('/:postId/like', authMiddleware.requireAuth, postController.likePost);

// Route to search posts by a search term
router.get('/search', authMiddleware.requireAuth, postController.searchPosts);

module.exports = router;
