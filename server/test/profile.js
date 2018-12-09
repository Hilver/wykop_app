import test from 'ava'
import request from 'supertest'
import app from '../app.js'


test('GET /profile/[login]', async t => {

     const res = await request(app)
	.get('/profile/cccn')
		
	t.is(res.status, 201)
	t.is(res.body.login, 'cccn')
})

test('GET /profile/[login] - no login found', async t => {

	const res = await request(app)
	.get('/profile/ccccccn')
	
	t.is(res.status, 404)
	t.is(res.body.message, 'User can not be found!')
})