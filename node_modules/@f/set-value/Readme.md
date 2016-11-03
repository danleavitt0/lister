
# set-value

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Set the value of an input-type DOM node while preserving the user's selection.

## Installation

    $ npm install @f/set-value

## Usage

```js
var setValue = require('@f/set-value')

setValue(input, 'test')
```

## API

### setValue(node, value)

- `node` - A DOM node that can accept a value (e.g. input, textarea)
- `value` - The new value to set in the field specified by `node`

**Returns:** void

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/set-value.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/set-value
[git-image]: https://img.shields.io/github/tag/micro-js/set-value.svg
[git-url]: https://github.com/micro-js/set-value
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/set-value.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/set-value
