/**
 * Imports
 */

var reduceObj = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(reduceObj(concat, [], {a: 1, b: 2}), [1, 2])
  t.equal(reduceObj(add, 0, {a: 1, b: 2}), 3)
  t.equal(reduceObj(add, 1, null), 1)

  t.end()
})

/**
 * Helpers
 */

function concat (a, b) {
  return a.concat(b)
}

function add (a, b) {
  return a + b
}
