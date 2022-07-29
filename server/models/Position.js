const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Position = sequelize.define('position', {
    name: {type: DataTypes.STRING, allowNull: false},
    cost: {type: DataTypes.NUMBER, allowNull: false}
})

module.exports = Position