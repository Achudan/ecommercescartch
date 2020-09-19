const mongoose = require('mongoose');

//mongo URI
const URI = "mongodb+srv://dbHulk:dbHulk@cluster0.zpedc.mongodb.net/<dbname>?retryWrites=true&w=majority";
//connection
const connectDB = async()=>{
    await mongoose.connect(URI,{ useNewUrlParser: true , useUnifiedTopology: true})
    console.log("Atlas db is successfullyconnected...")
}

module.exports = connectDB;