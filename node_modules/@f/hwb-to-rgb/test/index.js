/**
 * Imports
 */

var hwbToRgb = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(hwbToRgb(87, 0.27, 0.5), [101, 128, 69])
  t.end()
})
