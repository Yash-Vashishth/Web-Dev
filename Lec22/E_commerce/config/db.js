const mongoose = require("mongoose");

function connectDB() {
    const db_username = process.env.DB_USERNAME;
    const db_password = process.env.DB_PASSWORD;
    const db_name = process.env.DB_NAME;

    const db_url = ``;
    
    mongoose.connect(db_url)
        .then(() => console.log("DB Connected"))
        .catch(err => console.log(err));
}

module.exports = connectDB;