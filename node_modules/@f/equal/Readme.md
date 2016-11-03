
# equal

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check two things for shallow equality

## Installation

    $ npm install @f/equal

## Usage

```js
var equal = require('@f/equal')

if (equal(nextProps, prevProps)) {
  component.render(nextProps)
}
```

## API

### equal(a, b)

- `a` - An array/object/value to check against `b` for equality
- `b` - An array/object/value to check against `a` for equality

**Returns:** A Boolean value indicating whether `a` and `b` are shallow equal.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/equal.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/equal
[git-image]: https://img.shields.io/github/tag/micro-js/equal.svg?style=flat-square
[git-url]: https://github.com/micro-js/equal
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/equal.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/equal
