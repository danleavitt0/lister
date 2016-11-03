/**
 * Imports
 */

var normalizeBowser = require('..')
var bowser = require('bowser')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  normalizeBowser(bowser)

  t.equal(bowser.browser, 'chrome')
  t.end()
})
