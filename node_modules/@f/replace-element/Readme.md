
# replace-element

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Replace a DOM element with another DOM element

## Installation

    $ npm install @f/replace-element

## Usage

```js
var replaceElement = require('@f/replace-element')

function replaceVnode (newVnode, oldVnode) {
  return replaceElement(newVnode.element, oldVnode.element)
}
```

## API

### replaceElement(newNode, oldNode)

- `newNode` - The new node that you want to replace `oldNode` with
- `oldNode` - The node you want to replace

**Returns:** The replaced node (`oldNode`).

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/replace-element.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/replace-element
[git-image]: https://img.shields.io/github/tag/micro-js/replace-element.svg
[git-url]: https://github.com/micro-js/replace-element
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/replace-element.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/replace-element
