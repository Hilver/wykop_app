const knex = require('knex')({
    client: 'mysql',
    host : 'localhost',
    connection: {
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : 'wykop_app'
    }
  })

  module.exports = knex