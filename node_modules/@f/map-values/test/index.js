/**
 * Imports
 */

var mapValues = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(mapValues(add1, {a: 1, b: 2, c: 3}), [2, 3, 4])

  t.end()
})

/**
 * Helpers
 */

function add1 (n) {
  return n + 1
}
