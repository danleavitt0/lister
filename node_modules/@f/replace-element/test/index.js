/**
 * Imports
 */

var replaceElement = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  document.body.innerHTML = '<div id="container"><div id="child"></div></div>'

  var container = document.getElementById('container')
  var child = document.getElementById('child')
  var newChild = document.createElement('div')

  t.ok(container.children[0] === child)
  replaceElement(newChild, child)
  t.ok(container.children[0] === newChild)

  t.end()
})
