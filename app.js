const express = require('express');
const connectDB = require('./DB/Connection');

const app = express();
const dataBase = connectDB();

//below codes are to create middlewares

const dataController = require('./Controller/User');

app.use(express.json({ extended: false }));
app.use('/', dataController);


const port = process.env.port || 5000;
app.listen(port, ()=>{
    console.log("Connected to port "+port+" successfully.")
})
