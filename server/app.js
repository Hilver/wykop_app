const express = require('express')
const app = express()
const dotenv = require('dotenv')

const profileRoutes = require('./api/routes/profile')
const topRoutes = require('./api/routes/top')

dotenv.config()

app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*'); // * - Allow access to any client
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        if(req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    })

app.use('/profile', profileRoutes)
app.use('/top', topRoutes)

module.exports = app