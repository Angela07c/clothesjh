const {Router} = require('express');
const { createCart, getCarts } = require('../controllers/cart.controller');
const router = Router();

router.post('/',createCart);
router.get('/',getCarts);




module.exports = router;