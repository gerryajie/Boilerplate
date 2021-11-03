const mongoose = require('mongoose'); // Import mongoose
const mongooseDelete = require('mongoose-delete'); // Import mongoose-delete

const goodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'supplier',
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
goodSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('good', goodSchema); // Export good models
