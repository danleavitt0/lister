/**
 * Modules
 */

var reduceArray = require('@f/reduce-array')
var reduceObj = require('@f/reduce-obj')
var isObject = require('@f/is-object')
var isArray = require('@f/is-array')

/**
 * Expose reduce
 */

module.exports = reduce

/**
 * reduce
 */

function reduce (fn, acc, container) {
  if (isArray(container)) return reduceArray(fn, acc, container)
  if (isObject(container)) return reduceObj(fn, acc, container)

  return acc
}
