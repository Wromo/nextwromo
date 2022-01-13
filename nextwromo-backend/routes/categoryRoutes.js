const express = require('express');
const router = express.Router();
const {
  addCategory,
  addAllCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require('../controller/categoryController');

//add a category
router.post('/add', addCategory);

//add all category
router.post('/all', addAllCategory);

//get all category
router.get('/', getAllCategory);

//get a category
router.get('/:id', getCategoryById);

//update a category
router.put('/:id', updateCategory);

//delete a category
router.patch('/:id', deleteCategory);

module.exports = router;
