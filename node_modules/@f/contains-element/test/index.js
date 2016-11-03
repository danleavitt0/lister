/**
 * Imports
 */

var containsElement = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var node = $('<div><div></div></div>')

  t.ok(containsElement(node, node.firstChild))
  t.notOk(containsElement(node.firstChild, node))

  t.end()
})

/**
 * Helpers
 */

function $ (html) {
  document.body.innerHTML = html
  return document.body.firstChild
}
