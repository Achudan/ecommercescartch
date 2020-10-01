const ecomm= require('../Model/schema');

// validates category availability in product db and returns boolean.
exports.validateCategoryAvailability = (categoryName) => {
    var dataLength =0;
    return ecomm.categoryModel.find({category: categoryName}).then( 
        (data)=>{
                console.log("inside find" + data + data.length)
                var dataLength = data.length;
                if(dataLength>=1){
                    console.log(dataLength)
                    return true
                }
                return false;
        }
        )
}