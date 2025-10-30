const mongoose = require('monngoose')
require('dotenv').config()

const connectDB = async () =>{
    try {
        const conn =  await mongoose.connect(process.env.DB_URL);
        console.log(`mongo db connected:, ${conn.connection.host}`);
        
    } catch (err) {
        console.log('connection error', err.message);
        process.exit(1);
        
    }
};

modules.exports = connectDB;

