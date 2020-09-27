const ecomm= require('../Model/schema');
const categoryValidator = require('../Services/CategoryValidators');

exports.addProduct = async (req, res) => {

    try {
        const { productName, productPrice , category} = req.body;
        console.log(req.body);

        //category validation
        // let isCategoryAvailable = productValidator.validateCategoryAvailability(category)

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
            res.json(categoryModel);
        }
        await ecomm.createProductCollection(categoryName)

        // const defect = await ecomm.productModel.create(product);
        //   res.status(200).json({
        //     status: 'success',
        //     data: {
        //       defect,
        //     },
        //   });

        let productModel = new ecomm.productModel(product);
        await productModel.save();
        res.json(productModel);
    }
    catch (exception) {

    }

}

