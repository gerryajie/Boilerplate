const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const transactionSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'customer',
    },
    good: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      get: getQuantity,
    },
    total: {
      type: Number,
      required: true,
      get: getTotal,
    },
  },
  {
    // Enable timestamps
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    toJSON: { getters: true }, // Enable getter
  }
);

function getQuantity(quantity) {
  // return 'Falah';
  return `${quantity} items`;
}

function getTotal(total) {
  return `Rp. ${total}`;
}

// Enable soft delete
transactionSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('transaction', transactionSchema); // Exports the model
