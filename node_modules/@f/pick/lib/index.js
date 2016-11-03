/**
 * Expose pick
 */

module.exports = pick

/**
 * Return partial copy of object containing specified subset of keys.
 * @param  {Array} keys
 * @param  {Object} obj  Source
 * @return {Object}
 */

function pick (keys, obj) {
  if ('function' === typeof keys) return pickPredicate(keys, obj)
  if (Array.isArray(keys)) return pickList.apply(null, arguments)
}

function pickPredicate (fn, obj) {
  var copy = {}
  var keys = Object.keys(obj)

  for (var i = 0, len = keys.length; i < len; ++i) {
    var key = keys[i]
    var val = obj[key]

    if (fn(val, key)) {
      copy[key] = val
    }
  }

  return copy
}

function pickList (keys, a, b, c, d, e) {
  if (arguments.length > 6) return pickListLong.apply(null, arguments)

  var copy = {}

  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i]

    if (typeof a[key] !== 'undefined') copy[key] = a[key]
    else if (b && typeof b[key] !== 'undefined') copy[key] = b[key]
    else if (c && typeof c[key] !== 'undefined') copy[key] = c[key]
    else if (d && typeof d[key] !== 'undefined') copy[key] = d[key]
    else if (e && typeof e[key] !== 'undefined') copy[key] = e[key]
  }

  return copy
}

function pickListLong (keys /*, objs */) {
  var objs = []
  for (var i = 1; i < arguments.length; i++) { objs.push(arguments[i]) }

  var copy = {}

  for (var j = 0; j < keys.length; j++) {
    var key = keys[j]

    for (var k = 0; k < objs.length; k++) {
      var obj = objs[k]
      var val = obj[key]

      if (typeof val !== 'undefined') {
        copy[key] = obj[key]
        break
      }
    }
  }

  return copy
}
