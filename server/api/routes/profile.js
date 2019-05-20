const express = require('express')
const router = express.Router()

const profileControllers = require('../controllers/profile.js')

router.get('/:login', profileControllers.get_index_profile)

router.get('/diggs/:login', profileControllers.get_last_diggs)

module.exports = router