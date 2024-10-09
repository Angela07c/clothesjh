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


module.exports = {
    dbGetBillById,
    dbInsertBillById
};