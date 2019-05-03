const md5 = require('md5')
const fetch = require('node-fetch');

const apisign = url => md5(process.env.APP_SECRET + url)

exports.get_top_links = (req, res) => {
    const year = req.params.year
	const topURL = `https://a.wykop.pl/Top/Index/${year}/appkey/${process.env.APP_KEY}`
	const params = {
		method: 'GET',
		headers: {
			'apisign': apisign(topURL)
		}
	}

	fetch(topURL, params)
		.then(data => data.json())
		.then(result => {
            res.status(201).json(result)
            console.log(result)
		})
		.catch(err => {
			res.status(404).json({err})
		})
}
