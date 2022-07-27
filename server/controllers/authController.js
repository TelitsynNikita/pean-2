const User = require('../models/user')

class AuthController {
    async login(req, res) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})

        if (user) {
            res.json({user})
        }
    }

    async registration(req, res) {
        const {email, password} = req.body
        const candidate = await User.create({email, password})
        res.json({candidate})
    }
}

module.exports = new AuthController()