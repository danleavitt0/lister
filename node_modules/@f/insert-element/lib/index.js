/**
 * Expose insertElement
 */

module.exports = insertElement['default'] = insertElement

/**
 * insertElement
 */

function insertElement (parent, node, pos) {
  return parent.insertBefore(node, parent.childNodes[pos] || null)
}
