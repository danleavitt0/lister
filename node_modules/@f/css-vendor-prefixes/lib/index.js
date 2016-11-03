/**
 * Browsers to prefixes
 */

var webkit = 'webkit'
var moz = 'moz'
var ms = 'ms'

var cssVendorPrefixes = {
  chrome: webkit,
  safari: webkit,
  and_uc: webkit,
  and_chr: webkit,
  ios: webkit,
  android: webkit,
  phantom: webkit,
  opera: webkit,
  webos: webkit,
  blackberry: webkit,
  bada: webkit,
  tizen: webkit,
  chromium: webkit,
  vivaldi: webkit,
  firefox: moz,
  seamonkey: moz,
  sailfish: moz,
  ie: ms,
  edge: ms,
  msie: ms,
  msedge: ms
}

/**
 * Expose cssVendorPrefixes
 */

module.exports = cssVendorPrefixes
