require('dotenv').config()
const app = require('./app')
const db = require('./db')
const port = process.env.PORT || 5200

const start = async () => {
    try {
        await db.authenticate().then(() => console.log('БД подключина'))
        await db.sync()
        app.listen(port, () => console.log(`Сервер запущен на порту ${port}`))
    } catch (e) {
        console.log(e.message)
    }
}

start()