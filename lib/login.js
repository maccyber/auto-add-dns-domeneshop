const request = require('request')
const FileCookieStore = require('tough-cookie-filestore')
const jar = request.jar(new FileCookieStore('cookies.json'))
const config = require('../config')

var options = {
  url: config.loginUrl,
  method: 'POST',
  followRedirect: true,
  followAllRedirects: true,
  headers: {
    'User-Agent': 'request'
  },
  form: config.auth,
  jar: jar
}

module.exports = (callback) => {
  request(options, (err, resp, body) => {
    if (err) {
      return callback(err)
    } else {
      return callback(null, jar.getCookieString(config.url))
    }
  })
}
