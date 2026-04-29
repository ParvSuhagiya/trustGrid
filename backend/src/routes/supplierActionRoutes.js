const express = require('express');
const router = express.Router();
const {
  getProfile,
  updateProfile,
  getRequests,
  getRequestById,
  acceptRequest,
  rejectRequest,
  completeRequest,
  getOrders,
  getMetrics,
  getNotifications,
  markNotificationRead,
  getActivity
} = require('../controllers/supplierDashboardController');
const { authenticate } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

// Protect all routes: must be authenticated and have 'supplier' role
router.use(authenticate, authorizeRoles('supplier'));

// Profile routes
router.route('/profile')
  .get(getProfile)
  .put(updateProfile);

// Requests routes
router.get('/requests', getRequests);
router.get('/requests/:id', getRequestById);

// Request Action routes
router.patch('/requests/:id/accept', acceptRequest);
router.patch('/requests/:id/reject', rejectRequest);
router.patch('/requests/:id/complete', completeRequest);

// Orders route
router.get('/orders', getOrders);

// Dashboard metrics route
router.get('/dashboard/metrics', getMetrics);

// Notifications routes
router.get('/notifications', getNotifications);
router.patch('/notifications/:id/read', markNotificationRead);

// Activity log route
router.get('/activity', getActivity);

module.exports = router;
