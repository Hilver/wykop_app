const express = require('express')
const router = express.Router()

const topControllers = require('../controllers/top.js')

router.get('/:year', topControllers.get_top_links)

module.exports = router