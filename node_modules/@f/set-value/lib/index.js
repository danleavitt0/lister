/**
 * Modules
 */

var canSelectText = require('@f/can-select-text')

/**
 * Expose setValue
 */

module.exports = setValue['default'] = setValue

/**
 * setValue
 */

function setValue (node, value) {
  if (node.ownerDocument.activeElement === node && canSelectText(node)) {
    var start = node.selectionStart
    var end = node.selectionEnd
    node.value = value
    node.setSelectionRange(start, end)
  } else {
    node.value = value
  }
}
