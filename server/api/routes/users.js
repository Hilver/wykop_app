const express = require('express')
const router = express.Router()

const usersControllers = require('../controllers/users.js')

router.get('/ranking/:query', usersControllers.get_users)

router.post('/create', usersControllers.create_user)

router.put('/update/:user', usersControllers.update_user)

module.exports = router