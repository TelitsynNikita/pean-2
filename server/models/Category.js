const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Category = sequelize.define('category',  {
    name: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, defaultValue: ''},

})

module.exports = Category