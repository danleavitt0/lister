
# dom-events

[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

A list of all DOM events (probably not totally complete, but feel free to send a PR if one you want isn't included), exported as an array.

## Installation

    $ npm install @f/dom-events

## Usage

```js
var domEvents = require('@f/dom-events')

function delegate (root) {
  domEvents.forEach(function (name) {
    root.addEventListener(name, function () {
      // delegate the event
    })
  })
}
```

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/dom-events.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/dom-events
[git-image]: https://img.shields.io/github/tag/micro-js/dom-events.svg
[git-url]: https://github.com/micro-js/dom-events
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/dom-events.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/dom-events
