const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const goodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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
goodSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('good', goodSchema); // Exports the model
