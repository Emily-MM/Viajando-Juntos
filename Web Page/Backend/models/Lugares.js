const mongoose = require("mongoose")

const LugaresSchema= new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        unique: true
    },
    descripcion:{
        type: String,
        required: true,
        min: 6
    },
    coverPicture:{
        type: String,
        default:""
    },

},
);

module.exports = mongoose.model("Lugares", LugaresSchema);