/**
 * Imports
 */

var selfClosingTags = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.notEqual(selfClosingTags.indexOf('br'), -1)
  t.equal(selfClosingTags.index.br, true)

  t.end()
})
