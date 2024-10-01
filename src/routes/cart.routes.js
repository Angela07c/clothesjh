const {Router} = require('express');
const { createCart, getCarts, updateCart, deleteCart  } = require('../controllers/cart.controller');
const router = Router();

router.post('/',createCart);
router.get('/', getCarts);
router.patch('/:id', updateCart);
router.delete('/:id',deleteCart);


module.exports = router;