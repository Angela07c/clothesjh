const { Schema, model } = require( 'mongoose' );

/** Define el esquema o la estructura de datos que necesita Mongoose para crear sus objetos o documentos */
const CategorySchema = new Schema({
    /** Defino los campos que tiene la estructura */
    name: {                 // Nombre de la propiedad
        type: String,       // Define tipo          (regla 1)
        required: true
    },
    description: String,   /** Equivale a --> description: { type: String } */
    
        userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
}, {
    timestamps: true        // Agrega campos de fecha: creacion y actualizacion del documento
});

/** Establecemos un vínculo entre la estructura de datos y nombre que deseamos darle a coleccion en la base de datos */
const CategoryModel = model( 
    'categories',     // Nombre de la coleccion donde se van a guardar los documentos de tipo Product
    CategorySchema
);


module.exports = CategoryModel;      // Exportamos el modelo
