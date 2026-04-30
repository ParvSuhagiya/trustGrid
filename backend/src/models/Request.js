const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Supplier',
    required: false,
  },
  supplyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Supply',
    required: false,
  },
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'completed'],
    default: 'pending',
  },
  description: {
    type: String,
  }
}, { timestamps: true });

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
