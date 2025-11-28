/* const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI) || 'mongodb://localhost:27017/',
        {
            dbName : "Shopkart"
        };
        console.log("MongoDB Connected Successfully");
    } catch (err) {
        console.error("MongoDB Connection Failed:", err.message);  
        process.exit(1);
    }
};

module.exports = connectDB;
 */

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        // If MONGO_URI exists → use Atlas
        // Otherwise → connect to local MongoDB
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/Shopkart';

        await mongoose.connect(mongoURI, { dbName: "Shopkart" });


        console.log("MongoDB Connected Successfully");
    } catch (err) {
        console.error("MongoDB Connection Failed:", err.message);
        process.exit(1); // Exit on failure
    }
};

module.exports = connectDB;
