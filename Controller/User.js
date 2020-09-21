const ecomm = require('../Model/schema');

exports.signup = async (req, res) => {
  const { name, emailid, pass, phone } = req.body;
  console.log(req.body);
  let user = {};
  user.name = name;
  user.emailid = emailid;
  user.password = pass;
  user.phonenumber = phone;
  
  // await ecomm.userModel.create(user)
  // console.log("db created for user")
  let userModel = new ecomm.userModel(user);
  await userModel.save();
  res.json(userModel);
}

exports.addProduct = async (req, res) => {
  const { name,category } = req.body;
  console.log(req.body);
  let product = {};
  product.pname = name;
  
  let productModel = new ecomm.productModel(product);
  // let productModel = [];
  await productModel.save();
  res.json(productModel);
}
