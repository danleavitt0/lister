/**
 * Imports
 */

var toRgba = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(toRgba('hsl(214, 1, 0.5)'), [0, 110, 255, 1])
  t.deepEqual(toRgba('hsv(74, 0.19, 0.41)'), [100, 105, 85, 1])
  t.deepEqual(toRgba('rgba(128, 20, 30, 50%)'), [128, 20, 30, .50])
  t.end()
})
