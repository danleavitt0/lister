/**
 * Expose mapValues
 */

module.exports = mapValues

/**
 * mapValues
 */

function mapValues (fn, obj) {
  var keys = Object.keys(obj)
  var len = keys.length
  var result = new Array(len)

  for (var i = 0; i < len; ++i) {
    var key = keys[i]
    result[i] = fn.call(this, obj[key], key)
  }

  return result
}
