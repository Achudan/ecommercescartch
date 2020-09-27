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

exports.filterProducts = async(req,res)=>{
    //console.log(req.body.filterData)
    let filteredData=[]
    filteredData.push({"fullName":"hi","presentIn":"Categories"})
    ecomm.categoryModel.find({category:{$regex:".*"+req.body.filterData+".*"}},(err,obj)=>{
        //console.log(obj)
        filteredData.push({"fullName":"hi","presentIn":"Categories"})
        obj.forEach(data=>{
            console.log(data.category)
            filteredData.push({
                "fullName":data.category,
                "presentIn":"Categories"
            })
        })
    })
    console.log(filteredData)
}























































































































































































































