/**
 * Expose isValidAttr
 */

module.exports = isValidAttr

/**
 * isValidAttr
 */

function isValidAttr (val) {
  switch (typeof val) {
    case 'string':
    case 'number':
      return true
    case 'boolean':
      return val
    default:
      return false
  }
}
