/**
 * Modules
 */

var names = require('@f/color-names')
var toRgba = require('@f/to-rgba')

/**
 * Expose rgba
 */

module.exports = rgba

/**
 * rgba
 */

function rgba (red, green, blue, alpha) {
  switch (arguments.length) {
    case 1:
      green = 1
    case 2:
      if (names.hasOwnProperty(red)) {
        red = names[red]
      }

      var octets = toRgba(red)
      if (octets[3] === undefined || octets[3] === 1) {
        octets[3] = normalizePercent(green)
      }

      return stringify(octets)
    case 3:
      alpha = 1
    case 4:
      return stringify([normalize(red), normalize(green), normalize(blue), normalizePercent(alpha)])
  }
}

/**
 * Helpers
 */

function stringify (octets) {
  return 'rgba(' + octets.join(', ') + ')'
}

function normalize (octet) {
  if ('string' === typeof octet) {
    octet = normalizePercent(octet)
  }

  // If it's a value normalized between 0 and 1,
  // interpret it as a percentage of 255
  return octet < 1 && octet > 0
    ? Math.round(octet * 255)
    : octet
}

function normalizePercent (str) {
  if ('string' !== typeof str) return str

  var num = parseFloat(str)
  return str.indexOf('%')
    ? num / 100
    : num
}
