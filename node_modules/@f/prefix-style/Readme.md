
# prefix-style

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Prefix style objects based on browser version

## Installation

    $ npm install @f/prefix-style

## Usage

```js
var prefixStyle = require('@f/prefix-style')

var prefixer = prefixStyle('chrome', 34)

prefixStyle({transform: 'scale(2, 0.5)'}) // -> {
                                          //      transform: 'scale(2, 0.5)',
                                          //      webkitTransform:
                                          //    }
```

## API

### prefixStyle(browser, version)

- `browser` - Name of the browser
- `version` - Version number of the browser you want to prefix for

**Returns:** A partially applied function that accepts a style object: `prefix(style) -> style` and returns the same object, modified to have the proper prefixes set for the browser specified by `browser` and `version`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/prefix-style.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/prefix-style
[git-image]: https://img.shields.io/github/tag/micro-js/prefix-style.svg?style=flat-square
[git-url]: https://github.com/micro-js/prefix-style
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/prefix-style.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/prefix-style
