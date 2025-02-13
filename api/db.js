require("dotenv").config();
MongoUrl = 'mongodb+srv://ennyola45:church009@cluster0.jagzq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(MongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("You've connected to mongoDB successfully");
    } catch (error) {
        console.log("error connecting to mongoDB", error);
    }
};

module.exports = connectDB;
