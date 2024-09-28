const { model } = require("mongoose");
const categoryModel = require ("../models/Category.model");

const dbInsertCategory = async (newCategory) => {
    return await categoryModel.create (newCategory);

}

// const dbDeleteCategory = async () => {
//     return await categoryModel.findByIdAndDelete(  );
// }

const dbGetCategories = async() => {
    return await categoryModel.find ()
}


module.exports = {
    dbInsertCategory,
    dbGetCategories
}