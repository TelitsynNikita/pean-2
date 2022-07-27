const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.JWT_SECRET_KEY,
        {expiresIn: '1h'}
    )
}

class AuthController {
    async login(req, res) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})

        if (!user) {
            res.status(500).json({message: 'Пользователь с таким email не найден'})
        }

        const comparePassword = await bcrypt.compare(password, user.password)

        if (!comparePassword) {
            return res.status(404).json({message: 'Неверно введён пароль'})
        }

        const token = generateJwt(user.id, user.email, user.role)

        return res.json({token})
    }

    async registration(req, res) {
        const {email, password, role} = req.body

        if (!email || !password) {
            return res.status(500).json({message: 'Некорректный email или password'})
        }

        const candidate = await User.findOne({where: {email}})

        if (candidate) {
            return res.status(404).json({message: 'Пользователь с таким email уже существует'})
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const token = generateJwt(user.id, user.email, user.role)

        return res.json({token})
    }
}

module.exports = new AuthController()