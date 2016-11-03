/**
 * Expose normalizeBowser
 */

module.exports = normalizeBowser

/**
 * normalizeBowser
 */

function normalizeBowser (bowser) {
  bowser.browser = identifyBrowser(bowser)
  bowser.version = bowser.version ? parseFloat(bowser.version) : parseInt(parseFloat(bowser.osversion), 10)
  bowser.osversion = parseFloat(bowser.osversion)

  if (bowser.browser === 'ios_saf' && bowser.version > bowser.osversion) {
    bowser.version = bowser.osversion
  }

  if (bowser.browser === 'android' && bowser.chrome && bowser.version > 37) {
    bowser.browser = 'and_chr'
  }

  if (bowser.browser === 'android' && bowser.osversion < 5) {
    bowser.version = bowser.osversion
  }

  return bowser
}

/**
 * Browser data
 */

var browsers = {
  chrome: [ [ 'chrome' ], [ 'chromium' ] ],
  safari: [ [ 'safari' ] ],
  firefox: [ [ 'firefox' ] ],
  ie: [ [ 'msie' ] ],
  edge: [ [ 'msedge' ] ],
  opera: [ [ 'opera' ], [ 'vivaldi' ] ],
  ios_saf: [ [ 'ios', 'mobile' ], [ 'ios', 'tablet' ] ],
  ie_mob: [ [ 'windowsphone', 'mobile', 'msie' ], [ 'windowsphone', 'tablet', 'msie' ], [ 'windowsphone', 'mobile', 'msedge' ], [ 'windowsphone', 'tablet', 'msedge' ] ],
  op_mini: [ [ 'opera', 'mobile' ], [ 'opera', 'tablet' ] ],
  and_uc: [ [ 'android', 'mobile' ], [ 'android', 'tablet' ] ],
  android: [ [ 'android', 'mobile' ], [ 'android', 'tablet' ] ]
}

/**
 * Helpers
 */

function identifyBrowser (bowser) {
  for (var key in browsers) {
    if (browsers.hasOwnProperty(key)) {
      if (browsers[key].some(function (conditions) { return conditions.every(function (cond) { return bowser[cond] }) })) {
        return key
      }
    }
  }
}
