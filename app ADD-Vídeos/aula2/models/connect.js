
const mongodb = require('mongodb').MongoClient;


const db = mongodb.connect("mongodb://localhost:27017")

module.exports = db