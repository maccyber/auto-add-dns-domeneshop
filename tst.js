const updateDns = require('./index')

const opts = {
  subdomain: 'testdomene',
  ip: '188.166.160.143'
}
updateDns(opts, (err, data) => {
  console.log(err || data)
})
