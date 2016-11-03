
# form-elements

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

A list of the elements that can have values inside of a form. Just exports an array of form element names.

## Installation

    $ npm install @f/form-elements

## Usage

```js
var formElements = require('@f/form-elements')

function getCtrls (form) {
  return form.querySelectorAll(formElements.join(','))
}
```

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/form-elements.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/form-elements
[git-image]: https://img.shields.io/github/tag/micro-js/form-elements.svg
[git-url]: https://github.com/micro-js/form-elements
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/form-elements.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/form-elements
