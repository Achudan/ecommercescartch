const express = require('express');
const mongoose = require('mongoose');
const ecomm = require('../Model/schema');
const route = express.Router();

route.post('/setupDB', async (req, res) => {
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
});

route.post('/setupDB', async (req, res) => {
  const { name, emailid, pass, phone } = req.body;
  console.log(req.body);
  let user = {};
  user.name = name;
  user.emailid = emailid;
  user.password = pass;
  user.phonenumber = phone;
  
  let userModel = new ecomm.userModel(user);
  await userModel.save();
  res.json(userModel);
});

route.post('/addProduct', async (req, res) => {
  const { name,category } = req.body;
  console.log(req.body);
  let product = {};
  product.pname = name;
  
  // let productModel = new ecomm.productModel(product);
  let productModel = [];
  await productModel.save();
  res.json(productModel);
});
module.exports = route;
