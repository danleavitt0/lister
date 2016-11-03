
# css-prefix-data

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

CSS Prefix requirements for browsers

## Installation

    $ npm install @f/css-prefix-data

## Usage

```js
var cssPrefixData = require('@f/css-prefix-data')

function shouldPrefix (browser, version, property) {
  return cssPrefixData[browser][property] >= version
}
```

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/css-prefix-data.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/css-prefix-data
[git-image]: https://img.shields.io/github/tag/micro-js/css-prefix-data.svg?style=flat-square
[git-url]: https://github.com/micro-js/css-prefix-data
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/css-prefix-data.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/css-prefix-data
