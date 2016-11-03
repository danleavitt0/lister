
# to-rgba

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Convert any color string to an RGBA array

## Installation

    $ npm install @f/to-rgba

## Usage

```js
var toRgba = require('@f/to-rgba')

toRgba('hsl(214, 1, 0.5)')       // -> [0, 110, 255, 1]
toRgba('hsv(74, 0.19, 0.41)')    // -> [100, 105, 85, 1]
toRgba('rgba(128, 20, 30, 50%)') // -> [128, 20, 30, .50]
```

## Recognized color encodings

  * [rgb/rgba](https://en.wikipedia.org/wiki/RGB_color_model)
  * [hsl/hsla](https://en.wikipedia.org/wiki/HSL_and_HSV)
  * [hsv/hsva](https://en.wikipedia.org/wiki/HSL_and_HSV)
  * [hwb/hwba](https://en.wikipedia.org/wiki/HWB_color_model)

## Percentages

Where appropriate, values may be expressed as a percentage. They will be translated to their corresponding decimal equivalent. I.e. 20% -> .20.

## API

### toRgba(str)

- `str` - A CSS color string.

**Returns:** An array of `[red, green, blue, alpha]`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/to-rgba.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/to-rgba
[git-image]: https://img.shields.io/github/tag/micro-js/to-rgba.svg
[git-url]: https://github.com/micro-js/to-rgba
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/to-rgba.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/to-rgba
