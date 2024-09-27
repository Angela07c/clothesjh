const { Schema, model } = require( "monngoose" );

const DeliverSchema = new Schema({
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
    }
}, {
    timestamps: true
});

const DeliverModel = model(
    "deliveries",
    DeliverSchema
);

module.exports = DeliverModel

