const { model } = require("mongoose");
const billModel = require("../models/bill.model");

const dbGetBillById = async ( _id ) => {
    return await billModel.findOne ({ _id }).populate(['user',{
        path:  'cart',
        populate: {
            path: 'products.product',
            model: 'products'
        }
    }]);
}
const dbInsertBillById = async ( newId ) => {
    return await billModel.create( newId );
}

const dbDeleteBill = async (id) => {
    return await billModel.findByIdAndDelete(id);
}

module.exports = {
    dbGetBillById,
    dbInsertBillById,
    dbDeleteBill
};