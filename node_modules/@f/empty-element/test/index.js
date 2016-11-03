/**
 * Imports
 */

var emptyElement = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  document.body.innerHTML = '<div><span></span><span></span></div>'
  var div = document.body.firstChild

  t.equal(div.children.length, 2)
  emptyElement(div)
  t.equal(div.children.length, 0)

  t.end()
})
