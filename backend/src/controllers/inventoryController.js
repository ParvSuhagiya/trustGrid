const Supply = require('../models/Supply');
const Supplier = require('../models/Supplier');

// Helper
const getSupplierProfile = async (userId) => {
  return await Supplier.findOne({ userId });
};

// @desc    Get all inventory for the logged in supplier
// @route   GET /api/supplier/inventory
// @access  Private (Supplier)
const getInventory = async (req, res) => {
  try {
    const supplier = await getSupplierProfile(req.user.userId);
    if (!supplier) {
      return res.status(400).json({ message: 'Please complete your supplier profile first' });
    }
    
    const inventory = await Supply.find({ supplierId: supplier._id }).sort({ createdAt: -1 });
    res.json(inventory);
  } catch (error) {
    console.error('Error fetching inventory:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Add a new item to inventory
// @route   POST /api/supplier/inventory
// @access  Private (Supplier)
const addInventoryItem = async (req, res) => {
  try {
    const supplier = await getSupplierProfile(req.user.userId);
    if (!supplier) {
      return res.status(400).json({ message: 'Please complete your supplier profile first' });
    }

    const { productName, category, description, quantity, price } = req.body;

    const newItem = await Supply.create({
      supplierId: supplier._id,
      productName,
      category,
      description,
      quantity,
      price
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error adding inventory item:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update an inventory item
// @route   PUT /api/supplier/inventory/:id
// @access  Private (Supplier)
const updateInventoryItem = async (req, res) => {
  try {
    const supplier = await getSupplierProfile(req.user.userId);
    if (!supplier) {
      return res.status(400).json({ message: 'Please complete your supplier profile first' });
    }

    const item = await Supply.findOne({ _id: req.params.id, supplierId: supplier._id });
    if (!item) {
      return res.status(404).json({ message: 'Inventory item not found' });
    }

    const { productName, category, description, quantity, price } = req.body;
    
    item.productName = productName || item.productName;
    item.category = category || item.category;
    item.description = description || item.description;
    if (quantity !== undefined) item.quantity = quantity;
    if (price !== undefined) item.price = price;

    const updatedItem = await item.save();
    res.json(updatedItem);
  } catch (error) {
    console.error('Error updating inventory item:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete an inventory item
// @route   DELETE /api/supplier/inventory/:id
// @access  Private (Supplier)
const deleteInventoryItem = async (req, res) => {
  try {
    const supplier = await getSupplierProfile(req.user.userId);
    if (!supplier) {
      return res.status(400).json({ message: 'Please complete your supplier profile first' });
    }

    const item = await Supply.findOneAndDelete({ _id: req.params.id, supplierId: supplier._id });
    if (!item) {
      return res.status(404).json({ message: 'Inventory item not found' });
    }

    res.json({ message: 'Inventory item deleted' });
  } catch (error) {
    console.error('Error deleting inventory item:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getInventory,
  addInventoryItem,
  updateInventoryItem,
  deleteInventoryItem
};
