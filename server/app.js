const express = require('express')
const app = express()
const dotenv = require('dotenv')

const profileRoutes = require('./api/routes/profile')

dotenv.config()

app.use('/profile', profileRoutes) 

module.exports = app