/**
 * Expose hashStr
 */

module.exports = hashStr

/**
 * hashStr
 */

function hashStr (str) {
  var hash = 0

  for (var i = 0, len = str.length; i < len; ++i) {
      var c = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + c
      hash |= 0
  }

  return hash
}
