const express = require('express')
const connection = require('../../config/db');

const router = express.Router();

router.get('/users', async (req, res) => {
    
    const user = connection.query('SELECT * from users');
    res.send({
        user: user
    })

})

module.exports = router