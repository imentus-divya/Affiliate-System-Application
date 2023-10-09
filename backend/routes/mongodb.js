mongoose = require("mongoose")
require("dotenv").config();
let db = null;

let Mongo_DB = "mongodb+srv://divyasoni:imentus%40123@cluster0.vudqnun.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
async function connect() {
        mongoose.connect(Mongo_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => {
    console.log("Mongo db connected");
    })
    .catch((err) => {
    console.log("connection errror ", err);
    process.exit();
    });
}

function getDB() {
    return db;
}
connect();
module.exports = { connect, getDB };