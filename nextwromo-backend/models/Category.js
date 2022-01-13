const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  parent: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  children: [{}],
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
