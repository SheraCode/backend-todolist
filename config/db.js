const mongoose = require('mongoose');

const connection  = mongoose.createConnection('mongodb://localhost:27017/TodoApp').on('open',()=> {
    console.log("MongoDB Tersambung");
}).on('error',()=> {
    console.log("MongoDB Tidak Tersambung");
});

module.exports = connection;
