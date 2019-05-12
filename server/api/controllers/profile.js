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
         
		     fetch(profileURL, otherParams)
		     .then(data => data.json())
		     .then(result => {
				if(result.data !== null) {
					res.status(201).json(result.data)
				} else {
					res.status(404).json({'error': 'User can not be found!'})
				}
			})
		     .catch(err => {
		     	res.status(500).json({'error': 'Server is offline, please check again in a few minutes'})
			})	    
}
