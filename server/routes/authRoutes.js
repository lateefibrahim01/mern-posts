const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for Google OAuth2Client login
router.post('/google-login', authController.googleLogin);

module.exports = router;
