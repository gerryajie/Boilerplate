const mongoose = require('mongoose'); // Import mongoose
const mongooseDelete = require('mongoose-delete'); // Import mongoose-delete

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
      get: getImage,
    },
  },
  {
    // Enable Timestamps
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    toJSON: { getters: true }, // Enable getters
  }
);

// Getter function for image
function getImage(image) {
  if (!image) {
    return null;
  }

  return `/images/${image}`;
}

// Enable soft delete
customerSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('customer', customerSchema); // Export good models
