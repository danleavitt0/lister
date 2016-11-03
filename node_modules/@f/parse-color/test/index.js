/**
 * Imports
 */

var parseColor = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(parseColor('#FFEE12'), ['rgba', 0xFF, 0xEE, 0x12, 1])
  t.deepEqual(parseColor('rgba(128, 55, 37, .20)'), ['rgba', 128, 55, 37, .20])
  t.deepEqual(parseColor('rgba(128, 55, 37, 20%)'), ['rgba', 128, 55, 37, .20])
  t.deepEqual(parseColor('hsl(214, 1, .5)'), ['hsl', 214, 1, 0.5, 1])
  t.deepEqual(parseColor('hsl(214,1,.5)'), ['hsl', 214, 1, 0.5, 1])
  t.end()
})
