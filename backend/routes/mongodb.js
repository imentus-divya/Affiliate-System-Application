const MongoClient = require('mongodb').MongoClient;

let db = null;

async function connect() {
    const url = 'mongodb+srv://divyasoni:imentus%40123@cluster0.vudqnun.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';
    const dbName = 'affiliates';

    const client = new MongoClient(url, { connectTimeoutMS: 5000 });

    try {

        await client.connect();

        db = client.db(dbName);
        console.log("sucessfuly connect to mongodb");
    } catch (e) {
        console.error(e);
        throw new Error('Unable to connect to database');
    }
}

function getDB() {
    return db;
}

module.exports = { connect, getDB };