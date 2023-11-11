const mongoose = require("mongoose")

const ViajesSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Viajes", ViajesSchema);