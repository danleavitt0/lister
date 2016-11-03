/**
 * Imports
 */

var canSelectText = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.ok(canSelectText({tagName: 'INPUT', type: 'text'}))
  t.end()
})
