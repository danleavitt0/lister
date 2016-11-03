/**
 * Modules
 */

var isObject = require('@f/is-object')
var isArray = require('@f/is-array')
var equalArray = require('@f/equal-array')
var equalObj = require('@f/equal-obj')

/**
 * Expose equal
 */

module.exports = equal

/**
 * equal
 */

function equal (a, b) {
  if (isObject(a) && isObject(b)) return equalObj(a, b)
  if (isArray(a) && isArray(b)) return equalArray(a, b)

  return a === b
}
