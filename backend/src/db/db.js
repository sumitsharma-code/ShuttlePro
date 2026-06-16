const mongoose = require('mongoose');
require('dotenv').config();

async function connectDb() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGO DB CONNECTED!");
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDb;