
# self-closing-tags

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

List of HTML self-closing tags

## Installation

    $ npm install @f/self-closing-tags

## Usage

Just exports an array of self-closing HTML tags. And also exports an object map at the `index` property.

```js
var selfClosingTags = require('@f/self-closing-tags')

selfClosingTags.indexOf('br') !== -1

selfClosingTags.index.br === true
```

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/self-closing-tags.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/self-closing-tags
[git-image]: https://img.shields.io/github/tag/micro-js/self-closing-tags.svg?style=flat-square
[git-url]: https://github.com/micro-js/self-closing-tags
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/self-closing-tags.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/self-closing-tags
