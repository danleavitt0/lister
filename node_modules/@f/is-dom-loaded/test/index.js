global.document = {documentElement: {}}

/**
 * Imports
 */

var isDomLoaded = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  document.readyState = 'loading'
  t.equal(isDomLoaded(), false)

  document.readyState = 'interactive'
  t.equal(isDomLoaded(), true)

  t.end()
})
