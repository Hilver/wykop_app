const express = require('express')
const router = express.Router()

const profileControllers = require('../controllers/profile.js')

router.get('/:login', profileControllers.get_index_profile)

module.exports = router