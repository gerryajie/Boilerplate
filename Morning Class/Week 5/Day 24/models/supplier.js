const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const supplierSchema = new mongoose.Schema(
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
    // Enable timestamps
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    toJSON: { getters: true }, // Enable getter
  }
);

// Getter for image
function getImage(image) {
  if (!image) {
    return null;
  }

  return `/images/${image}`;
}

// Enable soft delete
supplierSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('supplier', supplierSchema); // Exports the model
