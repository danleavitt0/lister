/**
 * Imports
 */

var equal = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.ok(equal([1, 2], [1, 2]))
  t.ok(equal({a: 1, b: 3}, {a: 1, b: 3}))
  t.ok(equal(1, 1))
  t.notOk(equal([1, 2], {a: 1}))
  t.notOk(equal(1, 2))
  t.ok(equal(undefined, undefined))
  t.notOk(equal(null, undefined))
  t.end()
})
