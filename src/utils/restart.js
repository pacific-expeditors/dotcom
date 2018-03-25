/* @flow */
const Heroku = require('heroku.node')

const client = new Heroku({
  email: process.env.HEROKU_EMAIL,
  api_key: process.env.HEROKU_API_KEY
})

const restart = (req, res) => {
  client.app('pacificexpeditors').dynos.restart((err, msg) => {
    res.send(err || msg)
  })
}

module.exports = restart
