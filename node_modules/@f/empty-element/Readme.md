
# empty-element

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Remove all of a DOM element&#x27;s children

## Installation

    $ npm install @f/empty-element

## Usage

```js
var empty = require('@f/empty-element')

empty(document.body)
document.body.children.length === 0
```

## API

### empty(node)

- `node` - The DOM node you want to empty

**Returns:** `node` (the node you passed in)

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/empty-element.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/empty-element
[git-image]: https://img.shields.io/github/tag/micro-js/empty-element.svg
[git-url]: https://github.com/micro-js/empty-element
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/empty-element.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/empty-element
