var HashBuilder = require('hash-builder')

function makeHashFn(visitor) {
  var hash = HashBuilder()
  return function (obj) {
    visitor.call(obj, hash)
    return hash.end()
  }
}


module.exports.makeHashFn = makeHashFn