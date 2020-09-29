const mongoose = require('mongoose')
var mysql = require('mysql');
const util = require('util');

// Connect to mongodb
// const connectDB = async () => {
//     (process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: true,
//         useUnifiedTopology: true
//     });
//     console.log(`MongoDB Connected`)
// }
// module.exports = connectDB


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "node_starter"
});

connection.connect((err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("connection established")
    }
})

let query = util.promisify(connection.query).bind(connection);
module.exports = query