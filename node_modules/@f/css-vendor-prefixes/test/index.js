/**
 * Imports
 */

var cssVendorPrefixes = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(cssVendorPrefixes.chrome, 'webkit')
  t.equal(cssVendorPrefixes.firefox, 'moz')
  t.equal(cssVendorPrefixes.msie, 'ms')

  t.end()
})
