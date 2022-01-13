const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    parent: {
      type: String,
      required: true,
    },
    children: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    originalPrice: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
    },
    quantity: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    tag: [{}],
  },
  {
    timestamps: true,
  }
);

// productSchema.method('transform', function () {
//   let obj = this.toObject();
//   obj.id = obj._id;
//   delete obj._id;

//   return obj;
// });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
