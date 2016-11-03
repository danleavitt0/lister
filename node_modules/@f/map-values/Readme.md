
# map-values

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Map the values of an object to an array.

*Note: This is the opposite meaning of mapValues that lodash uses*

## Installation

    $ npm install @f/map-values

## Usage

```js
var mapValues = require('@f/map-values')

mapValues({a: 1, b: 2, c: 3}, add1) // -> [2, 3, 4]

function add1 (n) {
  return n + 1
}

```

## API

### mapValues(fn, obj)

- `fn` - `fn(val, key) -> newVal`. Receives `val` and `key`, and returns a new value to be put in the resulting array.
- `obj` - The object who's values to map

**Returns:** An array containing the result of calling `fn` on each value and key within `obj`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/map-values.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/map-values
[git-image]: https://img.shields.io/github/tag/micro-js/map-values.svg?style=flat-square
[git-url]: https://github.com/micro-js/map-values
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/map-values.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/map-values
