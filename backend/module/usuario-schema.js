const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },
    sex: {
        type: String,
        require: true
    }
})


module.exports = mongoose.model('usuario', usuarioSchema)