/*
 * Supported SVG attribute namespaces by prefix.
 *
 * References:
 * - http://www.w3.org/TR/SVGTiny12/attributeTable.html
 * - http://www.w3.org/TR/SVG/attindex.html
 * - http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS
 */

var svgAttributeNamespaces = {
  ev: 'http://www.w3.org/2001/xml-events',
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace',
  xmlns: 'http://www.w3.org/2000/xmlns/'
}

/**
 * Expose svgAttributeNamespaces
 */

module.exports = svgAttributeNamespaces
