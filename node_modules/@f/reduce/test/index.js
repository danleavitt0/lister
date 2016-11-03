/**
 * Imports
 */

var reduce = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should have initial value', function (t) {
  var sum = reduce(
    function (prev, curr) {
      return prev
    },
    5,
    []
  )

  t.equal(sum, 5)
  t.end()
})

test('should accumulate values', function (t) {
  var sum = reduce(
    function (prev, curr) {
      return prev + curr
    },
    10,
    [12, 8, 4, 2, 1]
  )

  t.equal(sum, 37)
  t.end()
})

test('should work with objects', function (t) {
  t.deepEqual(reduce(concat, [], {a: 1, b: 2}), [1, 2])
  t.equal(reduce(add, 0, {a: 1, b: 2}), 3)
  t.equal(reduce(add, 1, null), 1)

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
