
# equal-array

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check if two arrays have shallow equality

## Installation

    $ npm install @f/equal-array

## Usage

```js
var equal = require('@f/equal-array')

equal([1, 2], [1, 2]) // => true
equal([1, 2], [1, 2, 3]) // => false

```

## API

### equal(arr1, arr2)

- `arr1` - First array.
- `arr2` - Second array.

**Returns:** Boolean.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/equal-array.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/equal-array
[git-image]: https://img.shields.io/github/tag/micro-js/equal-array.svg
[git-url]: https://github.com/micro-js/equal-array
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/equal-array.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/equal-array
