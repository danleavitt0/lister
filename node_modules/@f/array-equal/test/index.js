/**
 * Imports
 */

var equal = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(equal([1, 2], [1, 2]), true)
  t.equal(equal([1, 2], [1, 2, 3]), false)
  t.equal(equal([], [1]), false)
  t.equal(equal([1], [2]), false)
  t.end()
})
