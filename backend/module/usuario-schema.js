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
        type: Boolean,
        require: true
    },
    dateOfB: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
    toJSON : {virtuals : true},
    toObject: {virtuals: true}
})

usuarioSchema.index({name: 1, email: 1, number: 1, sex: 1, dateOfB: 1})

module.exports = mongoose.model('usuario', usuarioSchema)