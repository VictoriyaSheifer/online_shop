const con = require('../utils/databse')
const Categories = require('../models/CategoriesModel');


// get all Categories
exports.getAllCategories = async (req, res) => {
    await Categories.findAll().then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load getAllCategories" + JSON.stringify(err))
    })
}

// insert a new Categories
exports.insertCategory = async (req, res) => {
    await Categories.create(req.body).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load inserted Categories" + JSON.stringify(err))
    });
}

//update Categories
exports.editCategories = async (req, res) => {
    await Categories.update(req.body, { where: { id: req.body.id } }).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error load edit Categories" + JSON.stringify(err))
    })
}
