const mongoose = require('mongoose');

const connection  = mongoose.createConnection('mongodb://mongo:-5C6b2FCGDBcA14AAc5GB4acgE12fH6h@roundhouse.proxy.rlwy.net:36342').on('open',()=> {
    console.log("MongoDB Tersambung");
}).on('error',()=> {
    console.log("MongoDB Tidak Tersambung");
});

module.exports = connection;
