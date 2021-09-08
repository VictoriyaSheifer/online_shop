const con = require('../utils/databse')
const Orders = require('../models/OrdersModel');

// get all CartItems
exports.getAllUsersOrders = async (req, res) => {
    await Orders.findAll({where: {userId: req.body.id}}).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load getAllUsersOrders" + JSON.stringify(err))
    })
}

exports.getNumOfOrders = async (req, res) => {
    await Orders.findAndCountAll().then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load getAllUsersOrders" + JSON.stringify(err))
    })
}

// get if there is shopping cart in users history
exports.insertOrders = async (req, res) => {
    await Orders.create(req.body).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load insertOrders" + JSON.stringify(err))
    })
}

// get if here is shopping cart in users history
exports.checkDate = async (req, res) => {
await Orders.findAll({where: {shippment_date: req.body.shippment_date }}).then(result => {
    //console.log("result.length ::: ",result.length)
    //console.log("result ::: ",result)
        if(result.length >= 3){
            res.status(200).send({message: "full."});
        }
        else res.status(200).send({message: "empty"});
    }).catch(err => {
        res.send("error load ShoppingCart" + JSON.stringify(err))
    })
}
