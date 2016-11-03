/**
 * Imports
 */

var isSubmittable = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.notOk(isSubmittable($('<button></button>')))
  t.notOk(isSubmittable($('<input type="text" />')))
  t.notOk(isSubmittable($('<input disabled="true" name="test" type="text" />')))
  t.ok(isSubmittable($('<input name="test" type="text" />')))

  t.end()
})

/**
 * Helpers
 */

function $ (str) {
  document.body.innerHTML = ''
  document.body.innerHTML = str
  return document.body.firstChild
}
