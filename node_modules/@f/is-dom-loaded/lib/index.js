/**
 * Expose isDomLoaded
 */

module.exports = isDomLoaded

/**
 * isDomLoaded
 */

function isDomLoaded () {
  return document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)
}
