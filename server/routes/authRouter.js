const express = require('express')
const router = express.Router()
const controller = require('../controllers/authController')

router.get('/login', controller.login)

router.post('/registration', controller.registration)

module.exports = router