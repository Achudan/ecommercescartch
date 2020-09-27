const ecomm= require('../Model/schema');
const productValidator = require('../Services/ProductValidators');

exports.placeOrder = async (req, res) => {
    try{

        // {
        //     "userId":"123abc",
        //     "totalCost":100,
        //     "products": [{"product":"watch","quantity":2},{"product":"soap","quantity":6}],
        //      "date":"2018-02-13"
        // }
        const { userId,totalCost,products,date } = req.body;
        console.log(req.body);
        let order = {};
        order.userId=userId;
        order.totalCost = totalCost;
        order.products = products;
        order.date = new Date(date)

        let orderModel = new ecomm.orderModel(order);
        await orderModel.save();
        console.log(orderModel)
        res.json(orderModel);
    }
    catch(exception){

    }
}