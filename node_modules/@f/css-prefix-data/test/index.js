/**
 * Imports
 */

var cssPrefixData = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(cssPrefixData.chrome.transform, 35)
  t.end()
})
