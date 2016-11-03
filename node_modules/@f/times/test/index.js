/**
 * Imports
 */

var times = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(times(3, identity), [0, 1, 2])
  t.end()
})

/**
 * Helpers
 */

function identity (n) {
  return n
}
