const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/buyerController');
const { authenticate } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

// Protect all routes and ensure user is a buyer
router.use(authenticate, authorizeRoles('buyer'));

router.get('/profile', getProfile);
router.put('/profile', updateProfile);

module.exports = router;
