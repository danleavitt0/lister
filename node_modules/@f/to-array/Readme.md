
# to-array

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Convert to array from array like.

## Installation

    $ npm install @f/to-array

## Usage

```js
var toArray = require('@f/to-array')

args(1, 2) // => [1, 2]

function args () {
  return toArray(arguments)
}

```

## API

### toArray(arr)

- `arr` - array like

**Returns:** array

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/to-array.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/to-array
[git-image]: https://img.shields.io/github/tag/micro-js/to-array.svg
[git-url]: https://github.com/micro-js/to-array
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/to-array.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/to-array
