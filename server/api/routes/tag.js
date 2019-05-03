const express = require('express')
const router = express.Router()

const tagControllers = require('../controllers/tag.js')

router.get('/:tag', tagControllers.get_tag_info)

module.exports = router