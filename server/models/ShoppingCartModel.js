// user_vacations
const Sequelize = require('sequelize');
const sequelize = require('../utils/databse')

const ShoppingCart = sequelize.define('shopping_cart', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
module.exports = ShoppingCart;


