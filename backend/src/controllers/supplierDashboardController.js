const Supplier = require('../models/Supplier');
const Request = require('../models/Request');
const Notification = require('../models/Notification');
const ActivityLog = require('../models/ActivityLog');
const mongoose = require('mongoose');

// Helper to get or create supplier profile for the current user
const getSupplierProfile = async (userId) => {
  let supplier = await Supplier.findOne({ userId });
  return supplier;
};

// @desc    Get supplier profile
// @route   GET /api/supplier/profile
// @access  Private (Supplier)
const getProfile = async (req, res) => {
  try {
    const supplier = await getSupplierProfile(req.user.userId);
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier profile not found' });
    }
    res.json(supplier);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update or create supplier profile
// @route   PUT /api/supplier/profile
// @access  Private (Supplier)
const updateProfile = async (req, res) => {
  try {
    const { name, category, description } = req.body;
    
    // Find and update, or create if it doesn't exist
    const supplier = await Supplier.findOneAndUpdate(
      { userId: req.user.userId },
      { name, category, description },
      { new: true, upsert: true }
    );

    res.json(supplier);
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get incoming/pending requests
// @route   GET /api/supplier/requests
// @access  Private (Supplier)
const getRequests = async (req, res) => {
  try {
    const { category, minBudget, maxBudget } = req.query;
    
    let filter = { status: 'pending' };
    
    // Allow filtering by category or budget if provided
    if (category) filter.category = category; // Note: Request model might not have category, filtering on productName if needed, or join
    if (minBudget || maxBudget) {
      filter.budget = {};
      if (minBudget) filter.budget.$gte = Number(minBudget);
      if (maxBudget) filter.budget.$lte = Number(maxBudget);
    }

    const requests = await Request.find(filter).populate('buyerId', 'name email').sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    console.error('Error fetching requests:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get request by ID
// @route   GET /api/supplier/requests/:id
// @access  Private (Supplier)
const getRequestById = async (req, res) => {
  try {
    const request = await Request.findById(req.params.id).populate('buyerId', 'name email');
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.json(request);
  } catch (error) {
    console.error('Error fetching request:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Accept a request
// @route   PATCH /api/supplier/requests/:id/accept
// @access  Private (Supplier)
const acceptRequest = async (req, res) => {
  try {
    const supplier = await getSupplierProfile(req.user.userId);
    if (!supplier) {
      return res.status(400).json({ message: 'Please complete your supplier profile first' });
    }

    const request = await Request.findById(req.params.id);
    
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    if (request.status !== 'pending') {
      return res.status(400).json({ message: `Cannot accept a request with status: ${request.status}` });
    }

    request.status = 'accepted';
    request.supplierId = supplier._id;
    await request.save();

    // Trigger Notification for buyer
    await Notification.create({
      userId: request.buyerId,
      message: `Your request for ${request.productName} was accepted by ${supplier.name}.`
    });

    // Trigger Activity Logs
    await ActivityLog.create({
      userId: request.buyerId,
      action: `Request accepted: ${request.productName} by ${supplier.name}`
    });
    
    await ActivityLog.create({
      userId: req.user.userId,
      action: `Accepted request: ${request.productName}`
    });

    res.json({ message: 'Request accepted successfully', request });
  } catch (error) {
    console.error('Error accepting request:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Reject a request
// @route   PATCH /api/supplier/requests/:id/reject
// @access  Private (Supplier)
const rejectRequest = async (req, res) => {
  try {
    const supplier = await getSupplierProfile(req.user.userId);
    const request = await Request.findById(req.params.id);
    
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    request.status = 'rejected';
    // Optionally track who rejected it if we want to assign supplierId on rejection
    if (supplier) {
      request.supplierId = supplier._id;
    }
    await request.save();

    const supplierName = supplier ? supplier.name : 'A supplier';

    // Trigger Notification for buyer
    await Notification.create({
      userId: request.buyerId,
      message: `${supplierName} rejected your request for ${request.productName}.`
    });

    // Trigger Activity Logs
    await ActivityLog.create({
      userId: request.buyerId,
      action: `Request rejected: ${request.productName} by ${supplierName}`
    });
    
    await ActivityLog.create({
      userId: req.user.userId,
      action: `Rejected request: ${request.productName}`
    });

    res.json({ message: 'Request rejected successfully', request });
  } catch (error) {
    console.error('Error rejecting request:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Mark a request as completed
// @route   PATCH /api/supplier/requests/:id/complete
// @access  Private (Supplier)
const completeRequest = async (req, res) => {
  try {
    const supplier = await getSupplierProfile(req.user.userId);
    const request = await Request.findById(req.params.id);
    
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    
    // Ensure the supplier owns this request
    if (request.supplierId && supplier && request.supplierId.toString() !== supplier._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to complete this request' });
    }

    if (request.status !== 'accepted') {
      return res.status(400).json({ message: 'Only accepted requests can be completed' });
    }

    request.status = 'completed';
    await request.save();

    // Trigger Notification for buyer
    await Notification.create({
      userId: request.buyerId,
      message: `Your request for ${request.productName} has been completed.`
    });

    // Trigger Activity Logs
    await ActivityLog.create({
      userId: request.buyerId,
      action: `Request completed: ${request.productName}`
    });
    
    await ActivityLog.create({
      userId: req.user.userId,
      action: `Completed request: ${request.productName}`
    });

    res.json({ message: 'Request completed successfully', request });
  } catch (error) {
    console.error('Error completing request:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get active and completed orders for the supplier
// @route   GET /api/supplier/orders
// @access  Private (Supplier)
const getOrders = async (req, res) => {
  try {
    const supplier = await getSupplierProfile(req.user.userId);
    if (!supplier) {
      return res.status(400).json({ message: 'Please complete your supplier profile first' });
    }

    // Orders are requests assigned to this supplier that are accepted or completed
    const orders = await Request.find({
      supplierId: supplier._id,
      status: { $in: ['accepted', 'completed'] }
    }).populate('buyerId', 'name email').sort({ updatedAt: -1 });

    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get dashboard metrics for the supplier
// @route   GET /api/supplier/dashboard/metrics
// @access  Private (Supplier)
const getMetrics = async (req, res) => {
  try {
    const supplier = await getSupplierProfile(req.user.userId);
    
    // Count all pending requests on the marketplace
    const totalPending = await Request.countDocuments({ status: 'pending' });
    
    let acceptedRequests = 0;
    let rejectedRequests = 0;
    let completedDeals = 0;
    let totalEarnings = 0;

    if (supplier) {
      const myRequests = await Request.find({ supplierId: supplier._id });
      
      myRequests.forEach(req => {
        if (req.status === 'accepted') acceptedRequests++;
        if (req.status === 'rejected') rejectedRequests++;
        if (req.status === 'completed') {
          completedDeals++;
          totalEarnings += req.budget;
        }
      });
    }

    const totalReceived = totalPending + acceptedRequests + completedDeals;

    res.json({
      totalReceived,
      acceptedRequests,
      rejectedRequests,
      completedDeals,
      totalEarnings
    });
  } catch (error) {
    console.error('Error fetching metrics:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get notifications for the supplier
// @route   GET /api/supplier/notifications
// @access  Private (Supplier)
const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.user.userId }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Mark a notification as read
// @route   PATCH /api/supplier/notifications/:id/read
// @access  Private (Supplier)
const markNotificationRead = async (req, res) => {
  try {
    const notification = await Notification.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      { read: true },
      { new: true }
    );
    
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    
    res.json(notification);
  } catch (error) {
    console.error('Error marking notification read:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get activity logs for the supplier
// @route   GET /api/supplier/activity
// @access  Private (Supplier)
const getActivity = async (req, res) => {
  try {
    const logs = await ActivityLog.find({ userId: req.user.userId }).sort({ createdAt: -1 }).limit(20);
    res.json(logs);
  } catch (error) {
    console.error('Error fetching activity:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
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
};
