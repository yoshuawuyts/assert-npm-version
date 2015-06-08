const exec = require('child_process').exec
const semver = require('semver')

module.exports = version

// get the npm version
// null -> cb
function version (param, cb) {
  exec('npm -v', function (err, res) {
    if (err) cb(err)
    cb(null, semver.gte(res, param), res.split('\n')[0])
  })
}
