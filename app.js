const express = require('express');
const connectDB = require('./DB/Connection');
const router = require('./Routes/routing')
const app = express();
const dataBase = connectDB();

//below codes are to create middlewares
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
// app.use(express.json({ extended: false }));
app.use(
    function(req,res,next){
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
        res.header("Access-Control-Allow-Headers", "content-type");
        next()
    }
)
app.use('/', router);


const port = process.env.port || 5000;
app.listen(port, ()=>{
    console.log("Connected to port "+port+" successfully.")
})
