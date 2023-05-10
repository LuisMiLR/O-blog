const express = require('express');
const app = express()
const fs = require('fs')
const router = require('./routes/router')

// -------- SET & USE -------- //
app.use('/assets', express.static('static'))
app.set('view engine', 'ejs')

// -------- CALL ALL ROUTES -------- //
app.use(router);

// -------- LISTEN SERVER PORT -------- //
app.listen(3000)