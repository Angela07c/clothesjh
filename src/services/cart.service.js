const CartModel = require("../models/Cart.model")

const dbInsertCart = async (newCart) => {
    return await CartModel.create(newCart);
}



module.exports = {
    dbInsertCart
}