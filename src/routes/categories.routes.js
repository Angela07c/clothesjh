const express = require( 'express' );
const { createCategory, getCategories, updateCategory, getCategoryById } = require('../controllers/category.controller');
const router = express.Router();


router.post ('/', createCategory);
router.get ('/', getCategories);
router.patch ('/:id', updateCategory);
router.get ('/:id', getCategoryById);

module.exports = router;