const mongoose = require("mongoose")

const ComunidadesSchema= new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        unique: true
    },
    integrantes:{
        type: Number
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

module.exports = mongoose.model("Comunidades", ComunidadesSchema);