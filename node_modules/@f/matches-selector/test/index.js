/**
 * Imports
 */

var matches = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var node = $('<div class="asdf"></div>')

  t.ok(matches(node, '.asdf'))
  t.ok(matches(node, 'div'))
  t.notOk(matches(node, 'span'))

  t.end()
})

/**
 * Helpers
 */

function $ (html) {
  document.body.innerHTML = html
  return document.body.firstChild
}
