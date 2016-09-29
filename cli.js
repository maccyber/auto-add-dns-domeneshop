#! /usr/bin/env node
'use strict'

const config = require('./config')
const updateDns = require('./index')

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
  console.log(`Updating domain ${opts.subdomain}.${config.rootDomain} to IP: ${opts.ip}`)
  updateDns(opts, (err, data) => {
    console.log(err || data)
  })
}

