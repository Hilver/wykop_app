const knex = require('../config/knexfile')
const uuidv4 = require('uuid/v4')
const User = require('../models/users')

exports.create_user = (req, res) => {
	User.create({
		id: uuidv4(),
		nickname: req.params.user,
		links_added_count: req.body.links_added_count,
		links_published_count: req.body.links_published_count,
		comments_added: req.body.comments_added,
		diggs: req.body.diggs,
		effectiveness: req.body.effectiveness,
		avg_daily_digg: req.body.avg_daily_digg,
		followers: req.body.followers,
		photoUrl: req.body.photoUrl
	}).then(() => {
		res.status(201)
		res.send({
			message: 'User has been created!'
		})
	}).catch((err) => {
		console.log(err)
		res.send({
			message: err
		})
	})
}

exports.get_users = (req, res) => {
	knex.select('user_id', 'user_nickname', 'photoUrl', req.params.query).from('users_stats').orderBy(req.params.query, 'desc').limit(10)
		.then(users => {
			res.status(200)
			res.send({
				users
			})
		})
		.catch(err => {
			res.send({
				message: err
			})
		})
}

exports.update_user = (req, res) => {
	knex('users_stats').where({user_nickname: req.params.user}).update(req.body)
		.then(() => {
			res.status(201)
			res.send({
				data: 'User has been updated!'
			})
		})
		.catch(err => {
			res.send({
				message: err
			})
		})
}