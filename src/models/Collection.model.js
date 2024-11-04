const { Schema, model } = require( 'mongoose' );

const collectionSchema = new Schema ({
    coleccion:{
        type: String,
        required: true
    },
    descripcion: {
        type: String,
     

    }    
})
const collectionModel = model (
    "collecciones",
    collectionSchema
);

module.exports = collectionModel; 