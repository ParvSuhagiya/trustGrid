const mongoose = require('mongoose');

const supplySchema = new mongoose.Schema({
  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Supplier',
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: 'General'
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  }
}, { timestamps: true });

const Supply = mongoose.model('Supply', supplySchema);

module.exports = Supply;
