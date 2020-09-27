const ecomm= require('../Model/schema');
const categoryValidator = require('../Services/CategoryValidators');

exports.addProduct = async (req, res) => {

    try {
        const { productName, productPrice , category} = req.body;
        console.log(req.body);

        let product = {};
        product.productName = productName;
        product.productPrice = productPrice;

        let categoryName = category.toLowerCase().trim();
        let isCategoryAvailable = await categoryValidator.validateCategoryAvailability(categoryName)
        console.log(isCategoryAvailable)
        if(!isCategoryAvailable){
            let categoryObj = {};
            categoryObj.category = categoryName;

            let categoryModel = new ecomm.categoryModel(categoryObj);
            await categoryModel.save();
            // res.json(categoryModel);
        }
        ecomm.createProductCollection(categoryName)


        let productModel = new ecomm.productModel(product);
        await productModel.save();
        res.send(productModel);
    }
    catch (error) {
        console.log(error)
        res.send(exception);
    }

}

