/**
 * Expose times
 */

module.exports = times

/**
 * times
 */

function times (n, fn) {
  var arr = new Array(n)

  for (var i = 0; i < n; ++i) {
    arr[i] = fn.call(this, i)
  }

  return arr
}
