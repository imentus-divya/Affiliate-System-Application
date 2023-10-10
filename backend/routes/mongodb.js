//mongoose = require("mongoose")
const { MongoClient } = require('mongodb');
require("dotenv").config();
let db = null;

//let Mongo_DB = "mongodb+srv://divyasoni:imentus%40123@cluster0.vudqnun.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
async function connect() {
    //const url = 'mongodb://127.0.0.1:27017';
    const url = 'mongodb+srv://divyasoni:imentus%40123@cluster0.vudqnun.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';
    const dbName = 'affiliates';

    const client = new MongoClient(url, { connectTimeoutMS: 5000 });

    try {

        await client.connect();

        db = client.db(dbName);
        console.log("sucessfully connected to mongodb");
    } catch (e) {
        console.error(e);
        throw new Error('Unable to connect to database');
    }
}

function getDB() {
    return db;
}
connect();
module.exports = { connect, getDB };