/**
 * Imports
 */

var hashStr = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(typeof hashStr('test'), 'number')
  t.end()
})
