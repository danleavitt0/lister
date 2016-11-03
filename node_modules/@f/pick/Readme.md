
# pick

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Return partial copy of object containing specified subset of keys.

## Installation

    $ npm install @f/pick

## Usage

```js
var pick = require('@f/pick')

var source = {a: 1, b: 2, c: 3, d: function () {}}
var src1 = {a: 2}
var src2 = {a: 1, b: 2}

pick(['a', 'c'], source)     // => {a: 1, c: 3}
pick('a', source)            // => {a: 1}
pick(isFunction, source)     // => {d: function () {}}
pick(['a', 'b'], src1, src2) // => {a: 2, b: 2}
```

## API

### pick(keys, ...objs)

- `keys` - Key(s) to pick, or predicate function that receives `(val, key)`.
- `...objs` - Source objects to pick from, the object in the leftmost position has the highest priority. Multiple objects do not work with predicate functions.

**Returns:** partial copy of `obj`

## Progressive picking

This pick implementation has a somewhat unique feature - it can pick progressively from objects until the key is found. If you pass multiple objects it will, starting from the left hand side, use the first value in the list that is not undefined. E.g.

```javascript
var src1 = {a: 2}
var src2 = {a: 1, b: 2}

pick(['a', 'b'], src1, src2) // => {a: 2, b: 2}
```

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/pick.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/pick
[git-image]: https://img.shields.io/github/tag/micro-js/pick.svg
[git-url]: https://github.com/micro-js/pick
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/pick.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/pick
