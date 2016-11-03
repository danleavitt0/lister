
# can-select-text

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check if an element can contain selectable text

## Installation

    $ npm install @f/can-select-text

## Usage

```js
var canSelectText = require('@f/can-select-text')

canSelectText(textInput) === true
canSelectText(checkboxInput) === false
```

## API

### canSelectText(node)

- `node` - A DOM element to check for text selectability

**Returns:** A boolean value indicating whether or not text can be selected in this input

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/can-select-text.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/can-select-text
[git-image]: https://img.shields.io/github/tag/micro-js/can-select-text.svg
[git-url]: https://github.com/micro-js/can-select-text
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/can-select-text.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/can-select-text
