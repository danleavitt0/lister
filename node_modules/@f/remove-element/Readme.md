
# remove-element

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Remove a DOM element

## Installation

    $ npm install @f/remove-element

## Usage

```js
var removeElement = require('@f/remove-element')

function removeVnode (vnode) {
  return removeElement(vnode.element)
}
```

## API

### removeElement(node)

- `node` - The DOM node you want to remove

**Returns:** The removed node

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/remove-element.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/remove-element
[git-image]: https://img.shields.io/github/tag/micro-js/remove-element.svg
[git-url]: https://github.com/micro-js/remove-element
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/remove-element.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/remove-element
