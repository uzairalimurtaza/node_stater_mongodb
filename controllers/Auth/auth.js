const query = require('../../config/db');

exports.createUsers = async (req, res, next) => {
    try {

        let { name, email, phone } = req.body

        let data = [{
            name: name,
            email: email,
            phone: phone
        }]
        const user = await query("insert into users SET ?", data);
        const users = await query('select * from users where id = ?', user.insertId);
        res.status(200).json({
            status: 200,
            message: 'User added successfully',
            users
        });
    } catch (err) {
        next(err)
        res.send({ message: 'error' })
    }
};

exports.updateUsers = async (req, res, next) => {
    try {
        var sql = "UPDATE users SET name='" + req.body.name + "', email='" + req.body.email + "' WHERE id=" + req.params.id;
        const user = await query(sql);
        const users = await query('select * from users where id = ?', req.params.id);
        res.status(200).json({
            status: 200,
            message: 'User added successfully',
            users
        });
    } catch (err) {
        next(err)
        res.send({ message: 'error' })
    }
};

exports.deleteUsers = async (req, res, next) => {
    try {
        let sql = "DELETE FROM users WHERE id=" + req.params.id + "";
        const user = await query(sql);
        // const users = await query('select * from users where id = ?', req.params.id);
        res.status(200).json({
            status: 200,
            message: 'User deleted'
        });
    } catch (err) {
        next(err)
        res.send({ message: 'error' })
    }
};

exports.getUsers = async (req, res, next) => {
    try {
        const users = await query('select * from users');
        // console.log(users[0].name);
        res.status(200).json({ users });
    } catch (err) {
        next(err)
        res.send({ message: 'error' })
    }
};