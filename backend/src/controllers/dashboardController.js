const mongoose = require('mongoose');
const Request = require('../models/Request');

// @desc    Get dashboard metrics dynamically
// @route   GET /api/dashboard/metrics
// @access  Private (Buyer)
const getMetrics = async (req, res) => {
  try {
    const buyerId = req.user.userId;
    const objectIdBuyer = new mongoose.Types.ObjectId(buyerId);

    // We can run parallel queries for performance
    const [totalRequests, activeRequests, completedRequests] = await Promise.all([
      Request.countDocuments({ buyerId }),
      Request.countDocuments({ buyerId, status: { $in: ['pending', 'accepted'] } }),
      Request.countDocuments({ buyerId, status: 'completed' })
    ]);

    // Let's do the aggregation properly for total spent
    const spentResult = await Request.aggregate([
      // match buyer ID properly casted to ObjectId
      { $match: { buyerId: objectIdBuyer, status: 'completed' } },
      { $group: { _id: null, total: { $sum: '$budget' } } }
    ]);

    const totalSpent = spentResult.length > 0 ? spentResult[0].total : 0;

    res.json({
      totalRequests,
      activeRequests,
      completedRequests,
      totalSpent
    });
  } catch (error) {
    console.error('Error fetching metrics:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getMetrics };
