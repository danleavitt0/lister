
# normalize-bowser

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Normalize a bowser object to a more usable form

## Installation

    $ npm install @f/normalize-bowser

## Usage

```js
var normalizeBowser = require('@f/normalize-bowser')
var bowser = require('bowser')

normalizeBowser(bowser)

bowser.browser // === chrome
bowser.version // === 37
```

## API

### normalizeBowser(bowser)

- `bowser` - Bowser object (as returned by `require('bowser')` or 'bowser._detect(userAgent)`)

**Returns:** The same bowser object, now decorated with:

  * `browser` - The name of the browser as a string (one of `chrome/safari/firefox/ie/edge/opera/ios/ie/op/and/android`). This is a restricted, normalized subset of the
  * `version` - The browser version number as a float
  * `osversion` - The OS version number as a float

# License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/normalize-bowser.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/normalize-bowser
[git-image]: https://img.shields.io/github/tag/micro-js/normalize-bowser.svg?style=flat-square
[git-url]: https://github.com/micro-js/normalize-bowser
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/normalize-bowser.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/normalize-bowser
