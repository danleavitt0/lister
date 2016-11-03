
# css-default-units

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Add default units to css values

## Installation

    $ npm install @f/css-default-units

## Usage

This is a very simple implementation of default units. It doesn't try to do default units for complex rules like media queries. It just handles the simplest cases, e.g. `height: 50` -> `height: 50px`. It skips [unitless properties](https://github.com/micro-js/css-unitless) when appropriate.

```js
var defaultUnits = require('@f/css-default-units')

function applyUnits (rule) {
  for (var key in rule) {
    rule[key] = defaultUnits(key, rule[key])
  }
}
```

## API

### cssDefaultUnits(key, value)

- `key` - The css property name (in camel case or hyphenated)
- `value` - The value you want to apply default units to, if appropriate

**Returns:** `value` with default units applied (if appropriate)

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/css-default-units.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/css-default-units
[git-image]: https://img.shields.io/github/tag/micro-js/css-default-units.svg
[git-url]: https://github.com/micro-js/css-default-units
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/css-default-units.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/css-default-units
