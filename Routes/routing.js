const express = require('express');
const routing = express.Router();

//controller exports
const userController = require('../Controller/User');
const productController = require('../Controller/ProductController');
const orderController = require('../Controller/OrderController');

routing.post('/signup',(req, res, next)=>{
    userController.signup(req, res, next)
} );

routing.get('/signin',(req, res, next)=>{
    userController.signin(req, res, next)
} );

routing.get('/getOrders',(req, res, next)=>{
    orderController.getOrders(req, res, next)
} );
routing.post('/addProduct', productController.addProduct);
routing.post('/placeOrder', orderController.placeOrder);

module.exports = routing;