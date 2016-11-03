/**
 * Modules
 */

var hexToRgba = require('@f/hex-to-rgba')

/**
 * Constants
 */

var regex = /^(rgba?|hsla?|hsva?|hwba?)\(\s*([\d\.\%]+)\s*,\s*([\d\.\%]+)\s*,\s*([\d\.\%]+)\s*(?:,\s*([\d\.\%]+)\s*)?\)/

/**
 * Expose parseColor
 */

module.exports = parseColor

/**
 * parseColor
 */

function parseColor (str) {
  var color

  if (str[0] === '#') {
    color = hexToRgba(str)
    color.unshift('rgba')
  } else {
    color = regex.exec(str).slice(1)
    if (!color) throw new Error('Invalid color expression passed to parse-color: ' + str)

    // Parse the number/percentage strings into actual values.
    // Do it mutatively to minimize our array allocations.
    color[1] = parseOctet(color[1])
    color[2] = parseOctet(color[2])
    color[3] = parseOctet(color[3])
    color[4] = color[4] === undefined ? 1 : parseOctet(color[4])
  }

  return color
}

/**
 * Helpers
 */

function parseOctet (str) {
  if (str === undefined) return

  return str.indexOf('%') === -1
    ? parseFloat(str)
    : parseFloat(str) / 100
}
