const express = require('express');
const dotenv = require('dotenv');
var mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const util = require('util');
app.use(bodyParser.json());
const query = require("./config/db");


// Route imports
const auth_Router = require('./routes/Auth/auth');
// call to routes
app.use('/api', auth_Router)


dotenv.config({ path: "./config/config.env" });


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

