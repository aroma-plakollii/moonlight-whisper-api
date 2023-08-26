const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const db = async () => {
    try{
        await mongoose.connect(uri, {useNewUrlParser : true});
        console.log(`MongoDB connection was established succesfully`);
    }
    catch(err){
        console.log(`There was a problem connection to MongoDB: ${err}` );
    }
}

module.exports = db;