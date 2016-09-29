#! /usr/bin/env node

const config = require('./config')
const updateDns = require('./index')
const login = require('./lib/login')

const arg = [
  ['i', 'ip=ARG', 'ip address to update'],
  ['d', 'subdomain=ARG', 'sub domain to update'],
  ['h', 'help', 'display this help'],
  ['v', 'version', 'show version']
]

let opt = require('node-getopt').create(arg).bindHelp().parseSystem()

if (opt.options.ip && opt.options.subdomain) {
  const opts = {
    subdomain: opt.options.subdomain,
    ip: opt.options.ip
  }
  login((err, loginData) => {
    if (err) {
      console.log(err)
      process.exit(1)
    }
    console.log(`Logged in as ${config.auth.username}`)
    console.log(`Updating domain ${opts.subdomain}.${config.rootDomain} to IP: ${opts.ip}`)
    updateDns(opts, (err, data) => {
      console.log(err || data)
    })
  })
}

