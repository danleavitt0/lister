
# svg-attribute-namespaces

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Map of SVG attribute namespaces to their namespace URIs.

## Installation

    $ npm install @f/svg-attribute-namespaces

## Usage

```js
var svgAttributeNamespaces = require('@f/svg-attribute-namespaces')

function svgNamespaceUri (name) {
  return svgAttributeNamespaces[name]
}
```

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/svg-attribute-namespaces.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/svg-attribute-namespaces
[git-image]: https://img.shields.io/github/tag/micro-js/svg-attribute-namespaces.svg
[git-url]: https://github.com/micro-js/svg-attribute-namespaces
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/svg-attribute-namespaces.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/svg-attribute-namespaces
