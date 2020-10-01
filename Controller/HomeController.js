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
    let categoryvalue = await ecomm.categoryModel.find({ category: { $regex: ".*" + req.body.filterData + ".*" } })
    categoryvalue.forEach((data)=>{
        filteredData.push({
                    "fullName": data.category,
                    "presentIn": "Categories"
                })
    })

    let productvalue = await ecomm.allProductModel.find({ productName: { $regex: ".*" + req.body.filterData + ".*" } })
    productvalue.forEach((data)=>{
        filteredData.push({
                    "fullName": data.productName,
                    "presentIn": data.category,
                })
    })
    res.send(filteredData)
}


































































































































































































