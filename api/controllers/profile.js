const md5 = require('md5')
const fetch = require('node-fetch');

const apisign = url => md5(process.env.APP_SECRET + url)



exports.get_index_profile = (req, res) => {
          const profile = req.params.login
          const profileURL = 'https://a2.wykop.pl/Profiles/Index/' + profile + '/appkey/' + process.env.APP_KEY
          const otherParams = {
                    method: 'GET',
                    headers: {
                       'apisign': apisign(profileURL)
                    }
                }
                const getData = fetch(profileURL, otherParams).then(res => res.json())

                res.status(201).json(getData.then(json => console.log(json)))
}