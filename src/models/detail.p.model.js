const { Schema, model } = require( 'mongoose' );

/** Define el esquema o la estructura de datos que necesita Mongoose para crear sus objetos o documentos */
const Detailchema = new Schema({
    /** Defino los campos que tiene la estructura */
    name: {
        type: String,
        required: true 
    },

    size: {
        type: String,
        require: true 
    },

    quantity: {
        type: Number,
        default: 1,
        min: 1
    }

}, {
    timestamps: true        // Agrega campos de fecha: creacion y actualizacion del documento
});

/** Establecemos un vínculo entre la estructura de datos y nombre que deseamos darle a coleccion en la base de datos */
const DetailModel = model( 
    'detailProduct',     // Nombre de la coleccion donde se van a guardar los documentos de tipo Product
    Detailchemachema
);


module.exports = DetailModel;      // Exportamos el modelo
