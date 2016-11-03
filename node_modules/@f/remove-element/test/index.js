/**
 * Imports
 */

var removeElement = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  document.body.innerHTML = '<div id="container"><div id="child"></div></div>'

  var container = document.getElementById('container')
  var child = document.getElementById('child')

  t.equal(container.children.length, 1)
  removeElement(child)
  t.equal(container.children.length, 0)

  t.end()
})
