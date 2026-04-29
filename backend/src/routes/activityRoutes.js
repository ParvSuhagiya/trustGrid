const express = require('express');
const router = express.Router();
const { getActivities } = require('../controllers/activityController');
const { authenticate } = require('../middleware/authMiddleware');

router.use(authenticate);

router.get('/', getActivities);

module.exports = router;
