/**
 * Imports
 */

var pick = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should pick keys from object', function (t) {
  var source = {a: 1, b: 2, c: 3}
  t.deepEqual(pick(['a', 'c'], source), {a: 1, c: 3})
  t.end()
})

test('should ignore undefined values', function (t) {
  var source = {a: 1, b: 2}
  t.deepEqual(pick(['a', 'c'], source), {a: 1})
  t.end()
})

test('should work with predicates', function (t) {
  var fn = function () {}
  var source = {a: 1, b: fn}

  t.deepEqual(pick(function (f) { return typeof f === 'function' }, source), {b: fn})
  t.end()
})

test('should pick progressively if multiple objects are passed', function (t) {
  var src1 = {a: 1, b: 1}
  var src2 = {a: 2}
  var src3 = {a: 3}
  var src4 = {a: 4}
  var src5 = {a: 5}
  var src6 = {a: 6}
  var src7 = {a: 7}

  t.deepEqual(pick(['a', 'b'], src2, src1), {a: 2, b: 1})
  t.deepEqual(pick(['a', 'b'], src3, src2, src1), {a: 3, b: 1})
  t.deepEqual(pick(['a', 'b'], src4, src3, src2, src1), {a: 4, b: 1})
  t.deepEqual(pick(['a', 'b', 'c'], src4, src3, src2, src1), {a: 4, b: 1})
  t.deepEqual(pick(['a', 'b', 'c'], src5, src4, src3, src2, src1), {a: 5, b: 1})
  t.deepEqual(pick(['a', 'b', 'c'], src6, src4, src3, src2, src1), {a: 6, b: 1})
  t.deepEqual(pick(['a', 'b', 'c'], src7, src6, src4, src3, src2, src1), {a: 7, b: 1})


  t.end()
})
