/**
 * Imports
 */

var capitalize = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(capitalize('test'), 'Test')
  t.end()
})
