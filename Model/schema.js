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

const orderSchema = new mongoose.Schema({
  userId:{
    type: String,
    require: true
  },
  products:[
    { 
      product: String,
      quantity: Number
     }
  ],
  totalCost:{
    type: Number,
    require: true
  },
  date:{
    type:Date,
    required:true
  }
})

const allProductModel = new mongoose.Schema({
  productId:{
    type: String,
    require: true
  },
  productName:{
    type: String,
    require: true
  },
  category:{
    type: String,
    require: true
  },

})

ecomm.userModel = new mongoose.model('user', userSchema);
ecomm.categoryModel = new mongoose.model('categories', categorySchema, 'categories');
ecomm.orderModel = new mongoose.model('order', orderSchema);
ecomm.allProductModel = new mongoose.model('allProducts', allProductModel, 'allProducts');

ecomm.createProductCollection = (categoryName) =>{
  const productSchema = new mongoose.Schema({
    productName:{
      type: String,
      require: true
    },
    productPrice:{
      type: Number,
      require: true
    },
    category:{
      type: String,
      require: true
    }
  
  },
  ) 
  //try catch
  try{
    ecomm.productModel = new mongoose.model(categoryName) 
  }
  catch(error){
    ecomm.productModel = new mongoose.model(categoryName, productSchema, categoryName)
  }
  

}

module.exports = ecomm
