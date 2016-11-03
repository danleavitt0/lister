/**
 * Imports
 */

var toArray = require('..')
var test = require('tape')

/**
 * Tests
 */

test('convert args to array', function (t) {
  t.deepEqual(argsToArray(1), [1])
  t.deepEqual(argsToArray(1, 2), [1, 2])
  t.end()

  function argsToArray () {
    return toArray(arguments)
  }
})

test('convert array like to array', function (t) {
  var arr = {0: 0, 1: 1, 2: 2}
  arr.length = 3
  t.deepEqual(toArray(arr), [0, 1, 2])
  t.end()
})
