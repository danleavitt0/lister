/**
 * Modules
 */

/**
 * Expose canSelectText
 */

module.exports = canSelectText['default'] = canSelectText

/**
 * Selectable element regex
 */

var selectable = /^text|search|password|tel|url$/

/**
 * canSelectText
 */

function canSelectText (node) {
  return node.tagName === 'INPUT' && selectable.test(node.type)
}
