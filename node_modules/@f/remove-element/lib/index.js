/**
 * Expose removeElement
 */

module.exports = removeElement['default'] = removeElement

/**
 * removeElement
 */

function removeElement (node) {
  return node.parentNode.removeChild(node)
}
