/**
 * Modules
 */

var isArray = require('@f/is-array')
var hwbToRgb = require('@f/hwb-to-rgb')
var hsvToRgb = require('@f/hsv-to-rgb')
var hslToRgb = require('@f/hsl-to-rgb')
var parse = require('@f/parse-color')

/**
 * Expose toRgba
 */

module.exports = toRgba

/**
 * toRgba
 */

function toRgba (str) {
  // If it's already an array, assume it's an RGBA array and return it
  if (isArray(str)) return str

  var color = parse(str)
  var type = color.shift()
  var alpha = color[3] === undefined ? 1 : color[3]

  switch(type) {
    case 'hsla':
    case 'hsl':
      color = hslToRgb(color[0], color[1], color[2])
      break
    case 'hwba':
    case 'hwb':
      color = hwbToRgb(color[0], color[1], color[2])
      break
    case 'hsva':
    case 'hsv':
      color = hsvToRgb(color[0], color[1], color[2])
      break
  }

  color[3] = alpha
  return color
}
