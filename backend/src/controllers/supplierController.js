const Supplier = require('../models/Supplier');
const Supply = require('../models/Supply');

// @desc    Get all suppliers
// @route   GET /api/suppliers
// @access  Private
const getSuppliers = async (req, res) => {
  try {
    // Add simple search/filter if query exists
    const filter = {};
    if (req.query.search) {
      filter.name = { $regex: req.query.search, $options: 'i' };
    }
    if (req.query.category) {
      filter.category = req.query.category;
    }

    const suppliers = await Supplier.find(filter);
    res.json(suppliers);
  } catch (error) {
    console.error('Error fetching suppliers:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get supplier by ID
// @route   GET /api/suppliers/:id
// @access  Private
const getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }
    res.json(supplier);
  } catch (error) {
    console.error('Error fetching supplier:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get a supplier's inventory
// @route   GET /api/suppliers/:id/inventory
// @access  Private
const getSupplierInventory = async (req, res) => {
  try {
    const inventory = await Supply.find({ supplierId: req.params.id }).sort({ createdAt: -1 });
    res.json(inventory);
  } catch (error) {
    console.error('Error fetching supplier inventory:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getSuppliers, getSupplierById, getSupplierInventory };
