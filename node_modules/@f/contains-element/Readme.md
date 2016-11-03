
# contains-element

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check if one element contains another element

## Installation

    $ npm install @f/contains-element

## Usage

```js
var contains = require('@f/contains-element')

function checkHoverOnMouseMove (e, regionElement) {
  return contains(regionElement, e.target)
}
```

## API

### containsElement(parent, child)

- `parent` - The node to check if `child` is inside of
- `child` - The node you want to check to see if it's inside of `parent`

**Returns:** A Boolean value indicating whether or not `child` is inside of `parent` in the DOM hierarachy. Note that this is not a strict containment relation, `parent === child` will result in `true`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/contains-element.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/contains-element
[git-image]: https://img.shields.io/github/tag/micro-js/contains-element.svg?style=flat-square
[git-url]: https://github.com/micro-js/contains-element
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/contains-element.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/contains-element
