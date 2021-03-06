const con = require('../utils/databse')
const Products = require('../models/ProductsModel');


// get all Products
exports.getAllProducts = async (req, res) => {
    await Products.findAll().then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load getAllProducts" + JSON.stringify(err))
    })
}

// get all number of Products
exports.getNumberOfProducts = async (req, res) => {
    await Products.findAndCountAll().then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load getAllProducts" + JSON.stringify(err))
    })
}

// get all Products by category
exports.getProductsByCategory = async (req, res) => {
    await Products.findAll({where: {categoryId: req.body.id }}).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load products by category" + JSON.stringify(err))
    })
}

// insert a new Products
exports.insertProducts = async (req, res) => {
    await Products.create(req.body).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load inserted Products" + JSON.stringify(err))
    });
}

//update Products
exports.editProducts = async (req, res) => {
    await Products.update(req.body, { where: { id: req.body.id } }).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load editProducts" + JSON.stringify(err))
    })
}
