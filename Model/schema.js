const mongoose = require('mongoose');
var ecomm = {}
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  emailid: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
    required: true
  }
});


const categorySchema = new mongoose.Schema({
    category:{
      type: String,
      require: true
    },

})
ecomm.userModel = new mongoose.model('user', userSchema);
ecomm.categoryModel = new mongoose.model('categories', categorySchema, 'categories');

ecomm.createProductCollection = async (categoryName) =>{
  console.log("inside prod creation")
  const productSchema = new mongoose.Schema({
    productName:{
      type: String,
      require: true
    },
    productPrice:{
      type: Number,
      require: true
    },
  
  },
  )  
  ecomm.productModel = new mongoose.model(categoryName, productSchema, categoryName)

}

module.exports = ecomm