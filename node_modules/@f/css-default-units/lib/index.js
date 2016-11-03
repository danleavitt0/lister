/**
 * Modules
 */

var unitless = require('@f/css-unitless')

/**
 * Expose cssDefaultUnits
 */

module.exports = cssDefaultUnits

/**
 * cssDefaultUnits
 */

function cssDefaultUnits (key, value) {
  // Skip known unitless properties
  if (unitless[key]) return value
  // Skip non-numerical values
  if (isNaN(value) || value === '' || value === null) return value

  return value + 'px'
}
