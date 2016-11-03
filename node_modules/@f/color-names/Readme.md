
# color-names

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Map of color names to hex codes.

## Installation

    $ npm install @f/color-names

## Usage

The keys are color names, the values are hex codes.

```js
var colorNames = require('@f/color-names')

colorNames.blue === '#00ff'
```

## Is this list complete?

No. There are a ~400 colors not included here. It includes only the most common ones to avoid adding lots of bloat so that it can be used in browsers. It is the same list that [stylus uses](https://github.com/stylus/stylus/blob/dev/lib/colors.js).

**Returns:**

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/color-names.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/color-names
[git-image]: https://img.shields.io/github/tag/micro-js/color-names.svg
[git-url]: https://github.com/micro-js/color-names
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/color-names.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/color-names
