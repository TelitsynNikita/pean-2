const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Order = sequelize.define('order', {
    date: {type: DataTypes.DATE, defaultValue: Date.now},
    order: {type: DataTypes.NUMBER, allowNull: false},

})

module.exports = Order