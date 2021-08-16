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
        type: Sequelize.INTEGER(11),
        defaultValue: 0
    },
    image: {
        type: Sequelize.STRING,
        defaultValue:"defult.jpg"
    },
});
module.exports = Products;




