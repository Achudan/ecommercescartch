const express = require('express');
const connectDB = require('./DB/Connection');
const router = require('./Routes/routing')
const app = express();
const dataBase = connectDB();

//below codes are to create middlewares
app.use(express.json({ extended: false }));
app.use('/', router);


const port = process.env.port || 5000;
app.listen(port, ()=>{
    console.log("Connected to port "+port+" successfully.")
})
