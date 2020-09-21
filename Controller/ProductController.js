const ecomm= require('../Model/schema');
const productValidator = require('../Services/ProductValidators');

exports.addProduct = async (req, res) => {

    try {
        const { name, price , category} = req.body;
        console.log(req.body);

        //category validation
        // let isCategoryAvailable = productValidator.validateCategoryAvailability(category)

        let product = {};
        product.productName = name;
        product.productPrice = price;

        await ecomm.createProductCollection(category)
        await ecomm.debugger()

        const defect = await ecomm.productModel.create(product);
          res.status(200).json({
            status: 'success',
            data: {
              defect,
            },
          });

        // let productModel = new ecomm.productModel(product);
        // // let productModel = [];
        // await productModel.save();
        // res.json(productModel);
    }
    catch (exception) {

    }

}

