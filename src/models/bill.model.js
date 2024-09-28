const { Schema, model } = require( "mongoose" );

const billSchema = new Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    informacion: {
        type: String,
        required: true
    },
    idusuario: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
}, {
    timestamps: true
});

const billModel = model(
    "bills",
    billSchema
);

module.exports = billModel;

