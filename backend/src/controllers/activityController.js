const ActivityLog = require('../models/ActivityLog');

// @desc    Get user activity log
// @route   GET /api/activity
// @access  Private
const getActivities = async (req, res) => {
  try {
    const activities = await ActivityLog.find({ userId: req.user.userId }).sort({ createdAt: -1 }).limit(50);
    res.json(activities);
  } catch (error) {
    console.error('Error fetching activity log:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getActivities };
