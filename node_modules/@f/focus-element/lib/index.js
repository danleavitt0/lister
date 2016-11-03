/**
 * Expose focusElement
 */

module.exports = focusElement

/**
 * focusElement
 */

 function focusElement (node) {
   if (node.ownerDocument.activeElement !== node) {
     node.focus()
   }
 }
