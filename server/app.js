const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(require('cors')())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(require('morgan')('dev'))


module.exports = app