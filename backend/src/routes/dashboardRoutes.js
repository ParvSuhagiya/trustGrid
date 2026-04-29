const express = require('express');
const router = express.Router();
const { getMetrics } = require('../controllers/dashboardController');
const { authenticate } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

router.use(authenticate, authorizeRoles('buyer'));

router.get('/metrics', getMetrics);

module.exports = router;
