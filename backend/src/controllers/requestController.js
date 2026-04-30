const Request = require('../models/Request');
const Notification = require('../models/Notification');
const ActivityLog = require('../models/ActivityLog');
const Supply = require('../models/Supply');

// @desc    Create a new supply request
// @route   POST /api/requests
// @access  Private (Buyer)
const createRequest = async (req, res) => {
  try {
    const { supplierId, supplyId, productName, quantity, budget, description } = req.body;

    let finalBudget = budget;
    let finalProductName = productName;

    // If a specific supply item is targeted, validate and calculate
    if (supplyId) {
      const supply = await Supply.findById(supplyId);
      if (!supply) {
        return res.status(404).json({ message: 'Requested inventory item not found' });
      }
      if (quantity > supply.quantity) {
        return res.status(400).json({ message: `Requested quantity exceeds available stock (${supply.quantity})` });
      }
      finalBudget = quantity * supply.price;
      finalProductName = supply.productName;
    }

    const request = new Request({
      buyerId: req.user.userId,
      supplierId: supplierId || null,
      supplyId: supplyId || null,
      productName: finalProductName,
      quantity,
      budget: finalBudget,
      description
    });

    const createdRequest = await request.save();

    // Log Activity
    await ActivityLog.create({
      userId: req.user.userId,
      action: `Created a supply request for ${finalProductName}`
    });

    // Create Notification
    await Notification.create({
      userId: req.user.userId,
      message: `Your supply request for ${finalProductName} has been created successfully.`
    });

    res.status(201).json(createdRequest);
  } catch (error) {
    console.error('Error creating request:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get all requests for a buyer
// @route   GET /api/requests
// @access  Private (Buyer)
const getRequests = async (req, res) => {
  try {
    const requests = await Request.find({ buyerId: req.user.userId })
                                  .populate('supplierId', 'name')
                                  .sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    console.error('Error fetching requests:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update a request
// @route   PUT /api/requests/:id
// @access  Private (Buyer)
const updateRequest = async (req, res) => {
  try {
    const { productName, quantity, budget, description } = req.body;

    const request = await Request.findOne({ _id: req.params.id, buyerId: req.user.userId });

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    if (request.status !== 'pending') {
      return res.status(400).json({ message: 'Cannot update a request that is not pending' });
    }

    request.productName = productName || request.productName;
    request.quantity = quantity || request.quantity;
    request.budget = budget || request.budget;
    request.description = description || request.description;

    const updatedRequest = await request.save();

    // Log Activity
    await ActivityLog.create({
      userId: req.user.userId,
      action: `Updated supply request for ${updatedRequest.productName}`
    });

    res.json(updatedRequest);
  } catch (error) {
    console.error('Error updating request:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete a request
// @route   DELETE /api/requests/:id
// @access  Private (Buyer)
const deleteRequest = async (req, res) => {
  try {
    const request = await Request.findOne({ _id: req.params.id, buyerId: req.user.userId });

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    await Request.deleteOne({ _id: req.params.id });

    // Log Activity
    await ActivityLog.create({
      userId: req.user.userId,
      action: `Deleted supply request for ${request.productName}`
    });

    res.json({ message: 'Request removed' });
  } catch (error) {
    console.error('Error deleting request:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update request status (Mock for supplier interaction)
// @route   PATCH /api/requests/:id/status
// @access  Private (Buyer or Supplier eventually, for now anyone auth'd)
const updateRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;

    // We allow finding it regardless of buyerId for flexibility in testing (simulate supplier action)
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    // Must be a valid status
    const validStatuses = ['pending', 'accepted', 'rejected', 'completed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    request.status = status;
    const updatedRequest = await request.save();

    // Notify Buyer
    await Notification.create({
      userId: request.buyerId,
      message: `Your request for ${request.productName} status is now ${status}.`
    });

    res.json(updatedRequest);
  } catch (error) {
    console.error('Error updating request status:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createRequest, getRequests, updateRequest, deleteRequest, updateRequestStatus };
