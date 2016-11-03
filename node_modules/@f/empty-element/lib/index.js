/**
 * Expose emptyElement
 */

module.exports = emptyElement

/**
 * emptyElement
 */

function emptyElement (el) {
  var node

  while (node = el.firstChild) {
    el.removeChild(node)
  }

  return el
}
