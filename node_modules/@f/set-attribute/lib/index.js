/**
 * Modules
 */

var svgAttributeNamespace = require('@f/svg-attribute-namespace')

/**
 * Expose setAttribute
 */

module.exports = setAttribute['default'] = setAttribute

/**
 * setAttribute
 */

function setAttribute (node, name, value) {
  var ns = svgAttributeNamespace(name)
  return ns
    ? node.setAttributeNS(ns, name, value)
    : node.setAttribute(name, value)
}
