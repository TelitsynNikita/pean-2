const User = require('./User')
const Order = require('./Order')
const Position = require('./Position')
const Category = require('./Category')

User.hasOne(Category)
Category.belongsTo(User)

// User.hasOne(Position)
// Position.belongsTo(User)
//
// Category.hasOne(Position)
// Position.belongsTo(User)

module.exports = {
    User,
    Category,
    Order,
    Position
}