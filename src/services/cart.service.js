const CartModel = require("../models/Cart.model")

const dbInsertCart = async (newCart) => {
    return await CartModel.create(newCart);
}

const dbGetCarts = async () => {
    return await CartModel.find().populate(['user','products.product']);
}

const dbUpdateCart = async (id, updateCartPut) => {
    return await CartModel.findOneAndUpdate( { _id: id },updateCartPut,{ new: true });
}

const dbDeleteCart = async ( id ) => {
    return await CartModel.findByIdAndDelete( id );
}
module.exports = {
    dbInsertCart,
    dbGetCarts,
    dbUpdateCart,
    dbDeleteCart
}