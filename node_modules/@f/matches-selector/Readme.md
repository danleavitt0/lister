
# matches-selector

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Polyfill for Element.prototype.matches

## Installation

    $ npm install @f/matches-selector

## Usage

```js
var matchesSelector = require('@f/matches-selector')


if (matchesSelector(':hover"'))

```

## API

### matchesSelector(node, selector)

- `node` - DOM Element
- `selector` - Selector. E.g. `:hover`, `.modal`.

**Returns:** Boolean indicating whether or not `node` matched `selector`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/matches-selector.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/matches-selector
[git-image]: https://img.shields.io/github/tag/micro-js/matches-selector.svg?style=flat-square
[git-url]: https://github.com/micro-js/matches-selector
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/matches-selector.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/matches-selector
