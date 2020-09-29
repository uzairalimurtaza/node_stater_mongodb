const express = require('express');
const dotenv = require('dotenv');
var mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const util = require('util');
app.use(bodyParser.json());
const query = require("./config/db");

dotenv.config({ path: "./config/config.env" });


app.get('/users', async (req, res, next) => {

    try {
        const users = await query('select *  from users');
        // console.log(users[0].name);
        res.send(users);
    } catch (err) {
        next(err)
        res.send({ message: 'error'})
    }
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

