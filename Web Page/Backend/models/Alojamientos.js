const mongoose = require("mongoose")

const AlojamientosSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    fechas:{
        type: Date,
        required: true,
        unique: false
    },
    personas:{
        type: Number,
        required: true,
    },
    precio:{
        type: Number,
        required: true,
    },

},
);

module.exports = mongoose.model("Alojamientos", AlojamientosSchema);