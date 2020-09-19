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

const productSchema = new mongoose.Schema({
    pname: {
      type: String,
      required: true
    }
});
ecomm.userModel = new mongoose.model('user', userSchema);
ecomm.productModel = new mongoose.model('product', productSchema);




module.exports = ecomm