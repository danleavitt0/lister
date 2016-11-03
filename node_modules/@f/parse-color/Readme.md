
# parse-color

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Parse a valid CSS color string into an array of its components (e.g. `['rgb', r, g, b]`, `['hsl', h, s, l]`, etc..)

## Installation

    $ npm install @f/parse-color

## Usage

```js
var parseColor = require('@f/parse-color')

parseColor('rgba(128, 37, 55, .20)') // -> ['rgba', 128, 37, 55, .20]
// You may also use %s
parseColor('rgba(128, 37, 55, 20%)') // -> ['rgba', 128, 37, 55, .20]
parseColor('hsl()')
```

## Recognized color encodings

  * [rgb/rgba](https://en.wikipedia.org/wiki/RGB_color_model)
  * [hsl/hsla](https://en.wikipedia.org/wiki/HSL_and_HSV)
  * [hsv/hsva](https://en.wikipedia.org/wiki/HSL_and_HSV)
  * [hwb/hwba](https://en.wikipedia.org/wiki/HWB_color_model)

## Percentages

Where appropriate, values may be expressed as a percentage. They will be translated to their corresponding decimal equivalent. I.e. 20% -> .20.

## API

### parseColor(str)

- `str` - A CSS color string

**Returns:** An array of the form `[type, p1, p2, p3, alpha?]` Where type is one of `rgb/rgba/hsl/hsla/hsv/hsva/hwb/hwba`, and p1-p3 are the corresponding components of the type's encoding. Alpha may be specified or left undefined, depending on whether the color type ends in 'a'.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/parse-color.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/parse-color
[git-image]: https://img.shields.io/github/tag/micro-js/parse-color.svg
[git-url]: https://github.com/micro-js/parse-color
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/parse-color.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/parse-color
