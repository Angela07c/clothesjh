const CartModel = require("../models/Cart.model")

const dbInsertCart = async (newCart) => {
    return await CartModel.create(newCart);
}

const dbGetCarts = async () => {
    return await CartModel.find().populate(['user','products.product']);
}


module.exports = {
    dbInsertCart,
    dbGetCarts
}