const mongoose = require('mongoose'); // Import mongoose
const mongooseDelete = require('mongoose-delete'); // Import mongoose-delete

const transactionSchema = new mongoose.Schema(
  {
    good: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'customer',
    },
    quantity: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
      get: getTotal,
    },
  },
  {
    // Enable Timestamps
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    toJSON: { getters: true },
  }
);

function getTotal(total) {
  let string = total.toString().split('').reverse();
  let result = [];

  string.map((item, i) => {
    if (i % 3 === 0 && i !== 0) {
      result.push('.');
    }
    result.push(item);
  });
  result.reverse();

  return `Rp ${result.join('')},00`;
}

// Enable soft delete
transactionSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('transaction', transactionSchema); // Export good models
