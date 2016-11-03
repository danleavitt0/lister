/**
 * Expose replaceElement
 */

module.exports = replaceElement['default'] = replaceElement

/**
 * replaceElement
 */

function replaceElement (newNode, oldNode) {
  return oldNode.parentNode.replaceChild(newNode, oldNode)
}
