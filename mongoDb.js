//Mongo Connection credentials
const CONNECTION_URL =
  process.env.CONNECTION_URL ||
  'mongodb+srv://atm:atm@cluster0.dobbdcl.mongodb.net/?retryWrites=true&w=majority';
const DATABASE_NAME = process.env.DATABASE_NAME || 'HSE-SUM';

const MongoClient = require('mongodb').MongoClient;
let _db;

module.exports = {
  connectToServer: function (callback) {
    MongoClient.connect(CONNECTION_URL, function (err, client) {
      _db = client.db(DATABASE_NAME);
      console.log('Connected to database: ' + DATABASE_NAME);
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
