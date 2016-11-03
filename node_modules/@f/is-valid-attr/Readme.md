
# is-valid-attr

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check whether or not a value is a valid DOM attribute

## Installation

    $ npm install @f/is-valid-attr

## Usage

```js
var isValidAttr = require('@f/is-valid-attr')

function setAttribute (node, name, value) {
  if (isValidAttr(value)) {
    node.setAttribute(name, value)
  }
}
```

## API

### isValidAttr(value)

- `value` - The value who's validity you want to check

**Returns:** Boolean indicating whether or not the value can be set as an attribute of a DOM element

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/is-valid-attr.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/is-valid-attr
[git-image]: https://img.shields.io/github/tag/micro-js/is-valid-attr.svg
[git-url]: https://github.com/micro-js/is-valid-attr
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/is-valid-attr.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/is-valid-attr
