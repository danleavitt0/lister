
# hwb-to-rgb

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Convert HWB colors to RGB

## Installation

    $ npm install @f/hwb-to-rgb

## Usage

```js
var hwbToRgb = require('@f/hwb-to-rgb')

hwbToRgb(87, 0.27, 0.5) // -> [101, 128, 69]
```

## API

### hwbToRgb(hue, white, black)

- `hue` - Hue, expressed as an integer between 0 and 360.
- `white` - Whiteness, expressed as a floating point normalized between 0 and 1.
- `black` - Blackness, expressed as a floating point normalized between 0 and 1.

**Returns:** An array containing [red, green, blue] values that correspond to the HWB color you specified.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/hwb-to-rgb.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/hwb-to-rgb
[git-image]: https://img.shields.io/github/tag/micro-js/hwb-to-rgb.svg
[git-url]: https://github.com/micro-js/hwb-to-rgb
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/hwb-to-rgb.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/hwb-to-rgb
