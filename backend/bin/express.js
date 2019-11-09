const express = require('express')
const mongoose = require('mongoose')
const app = express ()

mongoose.connect('mongodb+srv://avstudio:av123studio@cluster0-xturj.gcp.mongodb.net/projReact?retryWrites=true&w=majority',
 {useCreateIndex: true, useNewUrlParser: true})

module.exports = app
