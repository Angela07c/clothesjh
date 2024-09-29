const {Router} = require('express');
const { createCart } = require('../controllers/cart.controller');
const router = Router();

router.post('/',createCart);





module.exports = router;