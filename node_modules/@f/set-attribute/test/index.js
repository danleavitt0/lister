/**
 * Imports
 */

var setAttribute = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var div = document.createElement('div')

  t.equal(div.getAttribute('test'), null)
  setAttribute(div, 'test', 'val')
  t.equal(div.getAttribute('test'), 'val')

  t.end()
})

test('should work with svg', function (t) {
  var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');

  t.equal(svg.getAttribute('xlink:href'), null)
  setAttribute(svg, 'xlink:href', 'test')
  t.equal(svg.getAttribute('xlink:href'), 'test')

  t.end()
})
