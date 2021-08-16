const con = require('../utils/databse')
const CartItems = require('../models/CartItemsModel');


// get all CartItems
exports.getAllCartItems = async (req, res) => {
    await CartItems.findAll().then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load getAllCartItems" + JSON.stringify(err))
    })
}


// insert a new CartItems
exports.insertCartItems = async (req, res) => {
    await CartItems.create(req.body).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load inserted CartItems" + JSON.stringify(err))
    });
}
    

//update CartItems
exports.editCartItems = async (req, res) => {
    await CartItems.update(req.body, { where: { id: req.body.id } }).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load edit CartItems" + JSON.stringify(err))
    })
}
