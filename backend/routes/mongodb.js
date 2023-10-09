const MongoClient = require('mongodb').MongoClient;

let db = null;

async function connect() {
    const url = 'mongodb://127.0.0.1:27017';
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

module.exports = { connect, getDB };