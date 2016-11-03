/**
 * Modules
 */

var prefixData = require('@f/css-prefix-data')
var vendorPrefixes = require('@f/css-vendor-prefixes')

/**
 * Value prefix data
 */

var valuePrefixData = {
  chrome: {
    flex: 29,
    gradient: 26
  },
  safari: {
    flex: 9,
    gradient: 7
  },
  ios_saf: {
    flex: 9,
    gradient: 7
  },
  opera: {
    flex: 17,
    gradient: 12.1
  },
  opera_mini: {
    gradient: 12.1
  },
  android: {
    gradient: 4.4
  }
}

/**
 * Expose prefixStyle
 */

module.exports = prefixStyle

/**
 * prefixStyle
 */

function prefixStyle (browser, version) {
  var valuePrefixes = createVersionMap(valuePrefixData[browser], version)
  var requiresPrefix = createVersionMap(prefixData[browser], version)
  var prefix = vendorPrefixes[browser]
  var cssPrefix = '-' + prefix + '-'

  return function (style) {
    for (var key in style) {
      var value = style[key]

      if (valuePrefixes[value]) {
        value = style[key] = cssPrefix + value
      }

      if (requiresPrefix[key]) {
        style[prefix + key[0].toUpperCase() + key.slice(1)] = value
      }
    }

    return style
  }
}

/**
 * Helpers
 */

function createVersionMap (items, version) {
  var map = Object.create(null)

  items = items || {}

  for (var key in items) {
    if (items.hasOwnProperty(key) && items[key] >= version) {
      map[key] = true
    }
  }

  return map
}
