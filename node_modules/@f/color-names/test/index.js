/**
 * Imports
 */

var colorNames = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(colorNames.blue, '#00ff')
  t.end()
})
