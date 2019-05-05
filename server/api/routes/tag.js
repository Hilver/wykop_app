const express = require('express')
const router = express.Router()

const tagControllers = require('../controllers/tag.js')

router.get('/:tag', tagControllers.get_tag_info)

router.get('/popular-tags', tagControllers.get_popular_tags)

module.exports = router