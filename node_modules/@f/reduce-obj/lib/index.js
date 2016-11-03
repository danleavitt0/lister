/**
 * Expose reduceObj
 */

module.exports = reduceObj

/**
 * reduceObj
 */

function reduceObj (fn, acc, obj) {
  if (!obj) return acc

  var keys = Object.keys(obj)

  for (var i = 0, len = keys.length; i < len; ++i) {
    var key = keys[i]
    acc = fn(acc, obj[key], key, obj)
  }

  return acc
}
