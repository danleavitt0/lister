/**
 * Expose isUndefined
 */

module.exports = isUndefined['default'] = isUndefined

/**
 * Check if undefined.
 * @param  {Mixed}  value
 * @return {Boolean}
 */

function isUndefined (value) {
  return typeof value === 'undefined'
}
