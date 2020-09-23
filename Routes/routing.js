const express = require('express');
const routing = express.Router();

//controller exports
const userController = require('../Controller/User');
const productController = require('../Controller/ProductController');

routing.post('/signup',(req, res, next)=>{
    userController.signup(req, res, next)
} );
routing.post('/addProduct', productController.addProduct);

module.exports = routing;