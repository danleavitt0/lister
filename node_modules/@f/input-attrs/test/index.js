/**
 * Imports
 */

var inputAttrs = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.ok(inputAttrs.indexOf('type') !== -1)
  t.ok(inputAttrs.indexOf('placeholder') !== -1)

  t.end()
})
