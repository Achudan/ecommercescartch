const express = require('express');
const routing = express.Router();

//controller exports
const userController = require('../Controller/User');
const productController = require('../Controller/ProductController');

routing.post('/setupDB', userController.signup);
routing.post('/addProduct', productController.addProduct);

module.exports = routing;