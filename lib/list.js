const request = require('request')
const jar = request.jar()
const config = require('../config')
const url = `${config.url}${config.id}`
const login = require('./login')
let cheerio = require('cheerio')

var options = {
  url: url,
  method: 'GET',
  followRedirect: true,
  followAllRedirects: true,
  headers: {
    'User-Agent': 'request'
  }
}

module.exports = (callback) => {
  login((err, cookie) => {
    if (err) {
      return callback(err)
    }
    jar.setCookie(request.cookie(cookie), config.domain)
    options.jar = jar
    // console.log(options)
    request(options, (err, resp, body) => {
      if (err) {
        return callback(err)
      } else {
        let $ = cheerio.load(body)
        const result = {
          auth: $('input[name=auth]').val(),
          cookie: cookie
        }
        return callback(null, result)
      }
    })
  })
}
