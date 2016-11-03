/**
 * Imports
 */

var isValidAttr = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.ok(isValidAttr('test'))
  t.ok(isValidAttr(true))
  t.ok(isValidAttr(1))

  t.notOk(isValidAttr(false))
  t.notOk(isValidAttr(function () {}))

  t.end()
})
