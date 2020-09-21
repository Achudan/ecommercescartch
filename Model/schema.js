const mongoose = require('mongoose');
let ecomm = {}
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
ecomm.categoryModel = new mongoose.model('product', categorySchema);

var nameOfCategory = "hello";
ecomm.createProductCollection = async (categoryName) =>{
  nameOfCategory = categoryName;
  console.log(nameOfCategory)
}

ecomm.debugger = async () =>{
  // nameOfCategory = categoryName;
  console.log(nameOfCategory)
}

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
// { collection: nameOfCategory }
)
productSchema.set('collection', nameOfCategory);

ecomm.productModel = new mongoose.model(nameOfCategory, productSchema, nameOfCategory)


module.exports = ecomm