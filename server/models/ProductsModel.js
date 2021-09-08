const Sequelize = require('sequelize');
const sequelize = require('../utils/databse')

const Products = sequelize.define('products', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    discount_price: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
    },
    image: {
        type: Sequelize.STRING,
        defaultValue:"defult.jpg"
    },
});
module.exports = Products;




