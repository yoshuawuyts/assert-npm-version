#!/usr/bin/env node

const minimist = require('minimist')
const semver = require('semver')
const npv = require('./')

const args = minimist(process.argv.slice(2))
const v = args._[0]

if (args.help || args.h || !v) {
  console.log('Usage: assert-npm-version <version>')
  exit(0)
}

if (!semver.valid(v)) exit(1, 'please provide a valid semantic version')

npv(v, function (err, ok, currVer) {
  if (err) exit(1, err)
  if (!ok) exit(1, 'npm version ' + v + '>=' + currVer)
})

// exit the program
// num -> null
function exit (code, msg) {
  if (msg) console.log(msg)
  process.exit(code || 1)
}
