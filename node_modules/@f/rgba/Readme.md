
# rgba

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

RGBA string generator

## Installation

    $ npm install @f/rgba

## Usage

Generates an RGBA string given almost any reasonable input. You can pass regular RGBA values, color names, hex codes, and even other color encodings (e.g. HSV/HSL/HWB).

```js
var rgba = require('@f/rgba')

rgba(128, 30, 57, 0.20)        === 'rgba(128, 30, 57, 0.20)'
rgba('#FFEEFF', '20%')         === 'rgba(255, 238, 255, 0.20)'
rgba('salmon', 0.20)           === 'rgba(250, 128, 114, 0.20)'
rgba('hsl(214, 1, 0.5)', 0.75) === 'rgba(0, 110, 255, 0.50)'
rgba('hsla(214, 1, 0.5, 0.75)') === 'rgba(0, 110, 255, 0.50)'
rgba('hsv(74, 0.19, 0.41)')    === 'rgba(100, 105, 85, 1)'
rgba('hwb(87, 0.27, 0.5)')     === 'rgba(101, 128, 69, 1)'
```

## Which color encodings are supported?

  * hex codes
  * [named colors](https://github.com/micro-js/color-names)
  * [rgb/rgba](https://en.wikipedia.org/wiki/RGB_color_model)
  * [hsl/hsla](https://en.wikipedia.org/wiki/HSL_and_HSV)
  * [hsv/hsva](https://en.wikipedia.org/wiki/HSL_and_HSV)
  * [hwb/hwba](https://en.wikipedia.org/wiki/HWB_color_model)

## API

rgba has two different signatures, depending on how many arguments are passed:

### rgba(color, alpha)

- `color` - The color, specified as one of the allowed encodings listed above.
- `alpha` - Optional opacity, defaults to 1.

### rgba(red, green, blue, alpha)

- `red` - red, scaled between 0 and 255. If a number between 0 and 1 is passed, it's assumed to be a normalized percentage. You may also pass it as a string (e.g. '25%')
- `green` -  same as above, but for the green channel
- `blue` - same as above, but for the blue channel
- `alpha` - opacity

**Returns:** An rgba string accepted by CSS, of the form `rgba(red, green, blue, alpha)`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/rgba.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/rgba
[git-image]: https://img.shields.io/github/tag/micro-js/rgba.svg
[git-url]: https://github.com/micro-js/rgba
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/rgba.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/rgba
