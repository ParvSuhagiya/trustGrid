const Request = require('../models/Request');

// @desc    Get dashboard metrics dynamically
// @route   GET /api/dashboard/metrics
// @access  Private (Buyer)
const getMetrics = async (req, res) => {
  try {
    const buyerId = req.user.userId;

    // We can run parallel queries for performance
    const [totalRequests, activeRequests, completedRequests, spentAggregation] = await Promise.all([
      Request.countDocuments({ buyerId }),
      Request.countDocuments({ buyerId, status: { $in: ['pending', 'accepted'] } }),
      Request.countDocuments({ buyerId, status: 'completed' }),
      Request.aggregate([
        { $match: { buyerId: req.user.userId, status: 'completed' } }, // Note: we need to cast to ObjectId if necessary, let's assume it matches. In mongoose aggregation, we should match carefully. We will use the proper mongoose ObjectId if it's stored as ObjectId. 
      ])
    ]);

    // Let's do the aggregation properly for total spent
    const spentResult = await Request.aggregate([
      // match buyer ID. Need to ensure it's matched correctly. We'll use mongoose object id just in case
      { $match: { buyerId: new require('mongoose').Types.ObjectId(req.user.userId), status: 'completed' } },
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
