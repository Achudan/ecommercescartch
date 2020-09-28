const ecomm = require('../Model/schema');
const productValidator = require('../Services/ProductValidators');

exports.getCategories = async (req, res) => {
    console.log("home")
    ecomm.categoryModel.find((err, obj) => {
        if (obj == null)
            res.status(204).send("No Categories Found")
        else {
            res.status(200).send(obj)
        }
    })
}

exports.filterProducts = async (req, res) => {
    let filteredData = []
    let value = await ecomm.categoryModel.find({ category: { $regex: ".*" + req.body.filterData + ".*" } })
    value.forEach((data)=>{
        filteredData.push({
                    "fullName": data.category,
                    "presentIn": "Categories"
                })
    })
    res.send(filteredData)
}


































































































































































































