// require libraries
const express = require('express')
const bodyParser = require('body-parser')
const app = express()


//require app-files
const models = require('./models/index')
const router = require('./routes/index')


//middleware
app.use(require('cors')())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(require('morgan')('dev'))


//routes
app.use('/api', router)

module.exports = app