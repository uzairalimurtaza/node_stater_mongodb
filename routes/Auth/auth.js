const express = require('express')
const { getUsers, createUsers, updateUsers, deleteUsers } = require('../../controllers/Auth/auth');

const router = express.Router();

router.route('/users').get(getUsers)
router.route('/users').post(createUsers)
router.route('/users/:id').put(updateUsers)
router.route('/users/:id').delete(deleteUsers)

module.exports = router