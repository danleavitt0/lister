/**
 * Modules
 */

var hslToRgb = require('@f/hsl-to-rgb')

/**
 * Expose hwbToRgb
 */

module.exports = hwbToRgb

/**
 * hwbToRgb
 *
 * From: https://drafts.csswg.org/css-color/#hwb-to-rgb
 */

function hwbToRgb (h, w, b) {
  var rgb = hslToRgb(h, 1, 0.5)

  for (var i = 0; i < 3; ++i) {
    var c = rgb[i] / 255

    c *= 1 - w - b
    c += w
    
    rgb[i] = Math.round(c * 255)
  }

  return rgb
}
