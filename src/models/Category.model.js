const { Schema, model } = require( 'mongoose' );

const categorySchema = new Schema ({
    categoria:{
        type: String,
        required: true
    },
    coleccion: {
        type: String,
        required: true

    },

    precio: {
        type: Number,
        required: true
    },

    disponible: {
        type: String,
        required: true 
    }


})
const categoryModel = model (
    "categorias",
    categorySchema
);

module.exports = categoryModel; 