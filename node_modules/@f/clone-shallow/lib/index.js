/**
 * Modules
 */

var cloneObj = require('@f/clone-obj')
var cloneArray = require('@f/slice')
var isArray = require('@f/is-array')

/**
 * Expose cloneShallow
 */

module.exports = cloneShallow

/**
 * Clone object or array shallow
 * @param  {Object|Array} a object to copy
 * @return {Object|Array}
 */

function cloneShallow (a) {
  return isArray()
    ? cloneArray(a)
    : cloneObj(a)
}
