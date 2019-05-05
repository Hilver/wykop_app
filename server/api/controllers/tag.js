const md5 = require('md5')
const fetch = require('node-fetch');

const apisign = url => md5(process.env.APP_SECRET + url)

exports.get_tag_info = (req, res) => {
    const tag = req.params.tag
	const tagInfo = `https://a.wykop.pl/Tag/Index/${tag}/appkey/${process.env.APP_KEY}`
	const params = {
		method: 'GET',
		headers: {
			'apisign': apisign(tagInfo)
		}
	}

	fetch(tagInfo, params)
		.then(data => data.json())
		.then(result => {
            res.status(201).json(result)
            console.log(result)
		})
		.catch(err => {
			res.status(404).json({err})
		})
}

exports.get_popular_tags = (req, res) => {
	const popularTags = `https://a.wykop.pl/Tags/Index/appkey/${process.env.APP_KEY}`
	const params = {
		method: 'GET',
		headers: {
			'apisign': apisign(popularTags)
		}
	}

	fetch(popularTags, params)
		.then(data => data.json())
		.then(result => {
            res.status(201).json(result)
            console.log(result)
		})
		.catch(err => {
			res.status(404).json({err})
		})
}
