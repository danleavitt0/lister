
# css-vendor-prefixes

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Vendor prefixes for css by browser name

## Installation

    $ npm install @f/css-vendor-prefixes

## Usage

```js
var cssVendorPrefixes = require('@f/css-vendor-prefixes')

function getBrowserPrefix (browser) {
  return cssVendorPrefixes[browser]
}
```

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/css-vendor-prefixes.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/css-vendor-prefixes
[git-image]: https://img.shields.io/github/tag/micro-js/css-vendor-prefixes.svg?style=flat-square
[git-url]: https://github.com/micro-js/css-vendor-prefixes
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/css-vendor-prefixes.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/css-vendor-prefixes
