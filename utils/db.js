const mongoose = require("mongoose");
require('dotenv').config();


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected");
    } catch (err) {
        console.log("Error connecting to MongoDB:", err);  // Use `err` instead of `error`
    }
};

module.exports = connectDb;