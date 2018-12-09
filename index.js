const express = require('express')
const app = express()
const port = 8080
const md5 = require('md5')
const dotenv = require('dotenv')
const fetch = require('node-fetch');

dotenv.config()

const apisign = md5(process.env.APP_SECRET + 'https://a2.wykop.pl/Profiles/Actions/Hide/appkey/' + process.env.APP_KEY)
const otherParams = {
    method: 'GET',
    headers: {
       'apisign': apisign
    }
}

const getData = fetch('https://a2.wykop.pl/Profiles/Actions/Hide/appkey/' + process.env.APP_KEY, otherParams).then(res => res.json()).then(json => console.log(json))
    

    


 
app.get('/', (req, res) => res.send(JSON.stringify(getData)))

app.listen(port, () => console.log(getData))