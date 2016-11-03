/**
 * Imports
 */

var insertElement = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  document.body.innerHTML = '<div id="container"></div>'

  var container = document.getElementById('container')
  var div = document.createElement('div')

  t.equal(container.children.length, 0)
  insertElement(container, div, 0)
  t.equal(container.children.length, 1)
  t.equal(container.children[0], div)

  t.end()
})
