#!/usr/bin/env node

const open = require('open')

const [,, version, ...args] = process.argv

console.log('eita', version, args)

open('https://github.com/zastrich')