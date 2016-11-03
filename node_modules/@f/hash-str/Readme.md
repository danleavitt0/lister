
# hash-str

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Simple, uniformly distributed, non-cryptographic (don't use this for anything security related!) 32-bit string hash.

## Installation

    $ npm install @f/hash-str

## Usage

```js
var hashStr = require('@f/hash-str')

hashStr('some string') // -> 32-bit hash of 'some string'
```

## API

### hashStr(str)

- `str` - The string you want to hash

**Returns:** 32-bit integer hash of `str`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/hash-str.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/hash-str
[git-image]: https://img.shields.io/github/tag/micro-js/hash-str.svg
[git-url]: https://github.com/micro-js/hash-str
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/hash-str.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/hash-str
