const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const { authenticate } = require('../middleware/authMiddleware');

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Protected route example
router.get('/profile', authenticate, (req, res) => {
  res.status(200).json({ 
    message: 'Profile accessed successfully',
    user: req.user 
  });
});

module.exports = router;
