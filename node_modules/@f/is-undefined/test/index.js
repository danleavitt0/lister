/**
 * Imports
 */

var isUndefined = require('..')
var test = require('tape')

/**
 * Tests
 */

test('empty is undefined', function (t) {
  t.equal(isUndefined(), true)
  t.end()
})

test('undefined is undefined', function (t) {
  t.equal(isUndefined(undefined), true)
  t.end()
})

test('string is undefined', function (t) {
  t.equal(isUndefined('test'), false)
  t.end()
})

test('null is not undefined', function (t) {
  t.equal(isUndefined(null), false)
  t.end()
})

test('obj is not undefined', function (t) {
  t.equal(isUndefined({}), false)
  t.end()
})

test('array is not undefined', function (t) {
  t.equal(isUndefined([]), false)
  t.end()
})

test('number is not undefined', function (t) {
  t.equal(isUndefined(1), false)
  t.end()
})
