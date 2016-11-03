var matches

if (typeof Element !== 'undefined') {
  matches = Element.prototype.matches
    || Element.prototype.matchesSelector
    || Element.prototype.mozMatchesSelector
    || Element.prototype.msMatchesSelector
    || Element.prototype.oMatchesSelector
    || polyfill
}

/**
 * Last-ditch JS implementation
 */

function polyfill (selector) {
  var matches = (this.document || this.ownerDocument).querySelectorAll(selector)
  var i = matches.length

  while (--i >= 0 && matches.item(i) !== this) {}
  return i > -1
}


/**
 * Expose matchesSelector
 */

module.exports = function (node, selector) {
  return matches.call(node, selector)
}
