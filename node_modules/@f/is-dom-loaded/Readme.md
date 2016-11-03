
# is-dom-loaded

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check whether or not the document has finished loading

## Installation

    $ npm install @f/is-dom-loaded

## Usage

```javascript
var isDomLoaded = require('@f/is-dom-loaded')

var loaded = isDomLoaded()
var fns = []

if (!loaded) {
  document.addEventListener('DOMContentLoaded', function listener () {
    document.removeEventListener('DOMContentLoaded', listener)
    fns.forEach(function (fn) {
      fn()
    })
  })
}

function domready () {
  loaded ? setTimeout(fn) : fns.push(fn)
}
```

## API

### isDomLoaded()

**Returns:** Boolean indicating whether or not the document has finished loading

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/is-dom-loaded.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/is-dom-loaded
[git-image]: https://img.shields.io/github/tag/micro-js/is-dom-loaded.svg
[git-url]: https://github.com/micro-js/is-dom-loaded
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/is-dom-loaded.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/is-dom-loaded
