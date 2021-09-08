const con = require('../utils/databse')
const CartItems = require('../models/CartItemsModel');
const ShoppingCart = require('../models/ShoppingCartModel');
const Products = require('../models/ProductsModel');

// get all CartItems
exports.getAllCartItemsOfShoppingCart = async (req, res) => {
    await CartItems.findAll({where: { shoppingCartId: req.body.id } ,include:[{ model: Products}]}).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load getAllCartItemsOfShoppingCart" + JSON.stringify(err))
    })
}

// , where: { shoppingCartId: req.body.id }
// get if there is shopping cart in users history
exports.getLastShoppingCart = async (req, res) => {
    //console.log("user ::: ",req.body)
    await ShoppingCart.findAll({where: {userId: req.body.id ,status:"in process"}}).then(result => {
        //console.log("result.length ::: ",result.length)
        //console.log("result ::: ",result)
        if(result.length == 0){
            ShoppingCart.create({userId: req.body.id ,status:"in process"}).then(newShoppingCart => {
                res.send(newShoppingCart)
            }).catch(err => {
                res.send("error load createShoppingCart" + JSON.stringify(err))
            })
        }
        else res.send(result)
    }).catch(err => {
        res.send("error load ShoppingCart" + JSON.stringify(err))
    })
}

// get if there is shopping cart in users history
exports.updateShoppingCartToDone = async (req, res) => {
    await ShoppingCart.update({ status: "done" }, {where: {id: req.body.id }}).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load ShoppingCart" + JSON.stringify(err))
    })
}


// get if there is shopping cart in users history
exports.addCartItem = async (req, res) => {
    await CartItems.findAll({where: {shoppingCartId: req.body.shoppingCartId ,productId:req.body.productId }}).then(result => {
        if(result.length == 0){
            let p = req.body.product.discount_price === 0 ? req.body.product.price * req.body.qnt :req.body.product.discount_price * req.body.qnt ;
            let cart_item = {
                "qnt": req.body.qnt,
                "shoppingCartId": req.body.shoppingCartId,
                "productId": req.body.productId,
                "total_price": p,
            }
            CartItems.create(cart_item).then(result => {
                res.send(result)
            }).catch(err => {
                res.send("error load createShoppingCart" + JSON.stringify(err))
            })
        }
        else{
            let price = req.body.product.discount_price === 0 ? req.body.product.price : req.body.product.discount_price
            let q = result[0].dataValues.qnt + req.body.qnt;
            //console.log("price*q",price*q)
            CartItems.update({ qnt: q , total_price: price*q }, {where: {id: result[0].dataValues.id}}).then(result => {
                res.send(result)
            }).catch(err => {
                res.send("error update ShoppingCart" + JSON.stringify(err))
            })
        }
    }).catch(err => {
        res.send("error load ShoppingCart" + JSON.stringify(err))
    })
}

// get if there is shopping cart in users history
exports.updateQnt = async (req, res) => {
    await CartItems.update({ qnt: req.body.qnt ,total_price: req.body.total_price}, {where: {id: req.body.id}}).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load addToQnt" + JSON.stringify(err))
    })
}
// //DELETE
exports.deleteCartItem = async (req, res) => {
    await CartItems.destroy({ where: { id: req.body.id } }).then(result => {
        //  let error = result == 0 ? "Not found" : "";
        let error = ""
        if (result == 0)
            error = "Not found";
        res.send({ code: result, error: error })
    }).catch(err => {
        res.send({ code: 0, error: err })
    })
}

// //DELETE
exports.deleteAllCartItemFromShoppingCart = async (req, res) => {
    await CartItems.destroy({ where: { shoppingCartId: req.body.id } }).then(result => {
        //  let error = result == 0 ? "Not found" : "";
        let error = ""
        if (result == 0)
            error = "Not found";
        res.send({ code: result, error: error })
    }).catch(err => {
        res.send({ code: 0, error: err })
    })
}

// //DELETE
exports.deleteShoppingCart = async (req, res) => {
    await ShoppingCart.destroy({ where: { id: req.body.id } }).then(result => {
        //  let error = result == 0 ? "Not found" : "";
        let error = ""
        if (result == 0)
            error = "Not found";
        res.send({ code: result, error: error })
    }).catch(err => {
        res.send({ code: 0, error: err })
    })
}
    

//update CartItems
exports.editCartItems = async (req, res) => {
    await CartItems.update(req.body, { where: { id: req.body.id } }).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load edit CartItems" + JSON.stringify(err))
    })
}

//update editShoppingCart
exports.editShoppingCart = async (req, res) => {
    await ShoppingCart.update({ status: req.body.status }, { where: { id: req.body.id } }).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load edit editShoppingCart" + JSON.stringify(err))
    })
}

