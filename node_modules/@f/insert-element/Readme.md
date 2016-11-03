
# insert-element

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Insert an element at the specified position within a container

## Installation

    $ npm install @f/insert-element

## Usage

```js
var insertElement = require('@f/insert-element')

function insertVnode (parent, vnode, pos) {
  return insertElement(parent.element, vnode.element, pos)
}
```

## API

### insertElement(parent, node, pos)

- `parent` - The DOM node you want to insert `node` into
- `node` - The node you want to insert into `parent`
- `pos` - The numerical index you want to insert `node` within `parent`

**Returns:** The inserted node (`node`).

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/insert-element.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/insert-element
[git-image]: https://img.shields.io/github/tag/micro-js/insert-element.svg
[git-url]: https://github.com/micro-js/insert-element
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/insert-element.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/insert-element
