const ecomm= require('../Model/schema');
const productValidator = require('../Services/ProductValidators');

exports.getCategories = async(req,res) => {
    console.log("home")
    ecomm.categoryModel.find((err,obj)=>{
        if(obj==null)
            res.status(204).send("No Categories Found")
        else{
            res.status(200).send(obj)
        }
    })

}