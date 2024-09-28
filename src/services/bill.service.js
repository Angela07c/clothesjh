const billModel = require("../models/bill.model");

const dbGetBillById = async ( _id ) => {
    return await billModel.findOne ({ _id });
}
const dbInsertBillById = async ( newId ) => {
    return await billModel.create( newId );
}


module.exports = {
    dbGetBillById,
    dbInsertBillById
};