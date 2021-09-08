const Sequelize = require('sequelize');
const sequelize = require('../utils/databse')

const CartItem = sequelize.define('cart_Items', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    total_price: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
    },
    qnt: {
        type: Sequelize.INTEGER(11),
        defaultValue: 0
    },
});
module.exports = CartItem;




