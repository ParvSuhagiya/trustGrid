const express = require('express');
const router = express.Router();
const { createRequest, getRequests, updateRequest, deleteRequest, updateRequestStatus } = require('../controllers/requestController');
const { authenticate } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

router.use(authenticate);

// Request status can be updated by supplier or admin later, 
// for testing allow buyer role if necessary or create specific route
router.patch('/:id/status', updateRequestStatus);

// Protect below routes for buyers
router.use(authorizeRoles('buyer'));

router.route('/')
  .post(createRequest)
  .get(getRequests);

router.route('/:id')
  .put(updateRequest)
  .delete(deleteRequest);

module.exports = router;
