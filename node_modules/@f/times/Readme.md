
# times

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Run a function n times and aggregate the results into an array

## Installation

    $ npm install @f/times

## Usage

```js
var times = require('@f/times')

times(3, identity) === [0, 1, 2]
```

## API

### times(n, fn)

- `n` - The number of times to run `fn(i)`
- `fn` - Receives a single argument, the current index. Also called with the same `this` context as `times`.

**Returns:** An array of the return values of `fn`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/times.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/times
[git-image]: https://img.shields.io/github/tag/micro-js/times.svg
[git-url]: https://github.com/micro-js/times
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/times.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/times
