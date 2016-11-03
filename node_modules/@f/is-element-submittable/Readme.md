
# is-element-submittable

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check whether or not a form control is serializable. Copied from [submittable](https://github.com/yields/submittable), but made into an npm compatible micro module.

## Installation

    $ npm install @f/is-element-submittable

## Usage

```js
var isSubmittable = require('@f/is-element-submittable')

isSubmittable(<button type='submit'></button>) // false
isSubmittable(<input type='text' />)           // true
```

## API

### isSubmittable(element)

- `element` - The DOM element you want to check for serializability

**Returns:** A boolean value indicating whether or not the element contains a serializable value.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/is-element-submittable.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/is-element-submittable
[git-image]: https://img.shields.io/github/tag/micro-js/is-element-submittable.svg
[git-url]: https://github.com/micro-js/is-element-submittable
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/is-element-submittable.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/is-element-submittable
