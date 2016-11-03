/**
 * Expose containsElement
 */

module.exports = containsElement

/**
 * containsElement
 */

function containsElement (parent, child) {
  while (child && child !== parent)
    child = child.parentNode

  return !!child
}
