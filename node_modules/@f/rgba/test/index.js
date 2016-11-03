/**
 * Imports
 */

var rgba = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(rgba('#ffffff'), 'rgba(255, 255, 255, 1)')
  t.equal(rgba(128, 30, 57, 0.20), 'rgba(128, 30, 57, 0.2)')
  t.equal(rgba('#FFEEFF', '20%'), 'rgba(255, 238, 255, 0.2)')
  t.equal(rgba('salmon', 0.20), 'rgba(250, 128, 114, 0.2)')
  t.equal(rgba('hsl(214, 1, 0.5)', 0.75), 'rgba(0, 110, 255, 0.75)')
  t.equal(rgba('hsla(214, 1, 0.5, 0.75)'), 'rgba(0, 110, 255, 0.75)')
  t.equal(rgba('hsv(74, 0.19, 0.41)'), 'rgba(100, 105, 85, 1)')
  t.equal(rgba('hwb(87, 0.27, 0.5)'), 'rgba(101, 128, 69, 1)')
  t.end()
})
