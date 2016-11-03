/**
 * Expse equal
 */

module.exports = equal['default'] = equal

/**
 * Check if two arrays are equal.
 * @param  {Array} a array 1
 * @param  {Array} b array 2
 * @return {Boolean}
 */

function equal (a, b) {
  var aLen = a.length
  var bLen = b.length

  if (aLen === bLen) {
    for (var i = 0; i < aLen; ++i) {
      if (a[i] !== b[i]) {
        return false
      }
    }

    return true
  }

  return false
}
