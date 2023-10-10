const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/trazi');

mongoose.set('debug', true);

const db = mongoose.connection;

module.exports = db;
