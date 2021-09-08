const Sequelize = require('sequelize');
const sequelize = require('../utils/databse')

const Orders = sequelize.define('orders', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    total_price: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shippment_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
    card_number: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
});
module.exports = Orders;


