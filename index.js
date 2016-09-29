const list = require('./lib/list')
const config = require('./config')
const url = `${config.url}${config.id}`
const request = require('request')
const jar = request.jar()

var options = {
  url: url,
  method: 'POST',
  followRedirect: true,
  followAllRedirects: true,
  headers: {
    'User-Agent': 'request'
  }
}

module.exports = (opts, callback) => {
  list((err, data) => {
    if (err) {
      return callback(err)
    }
    jar.setCookie(request.cookie(data.cookie), config.domain)
    options.jar = jar
    options.form = {
      host: opts.subdomain,
      addform: 1,
      auth: data.auth,
      id: config.id,
      edit: 'dns',
      data: opts.ip,
      advanced: '0',
      'add.x': 1,
      'add.y': 1
    }
    request(options, (err, resp, body) => {
      if (err) {
        return callback(err)
      } else {
        return callback(null, 'done')
      }
    })
  })
}
