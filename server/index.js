require('dotenv').config()
const app = require('./app')
const sequelize = require('./db')
const port = process.env.PORT || 5200

const start = async () => {
    try {
        await sequelize.authenticate().then(() => console.log('БД подключена'))
        await sequelize.sync()
        app.listen(port, () => console.log(`Сервер запущен на порту ${port}`))
    } catch (e) {
        console.log(e.message)
    }
}

// start server
start()