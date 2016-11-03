
# input-attrs

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

List of valid HTML5 attributes for an input element

## Installation

    $ npm install @f/input-attrs

## Usage

```js
var inputAttrs = require('@f/input-attrs')

function render ({props}) {
  const containerProps = omit(inputAttrs, props)
  const inputProps = pick(inputAttrs, props)

  return (
    <div class='input-container' {...containerProps}>
      <input class='input' {...inputProps} />
    </div>
  )
}
```

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/input-attrs.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/input-attrs
[git-image]: https://img.shields.io/github/tag/micro-js/input-attrs.svg?style=flat-square
[git-url]: https://github.com/micro-js/input-attrs
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/input-attrs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/input-attrs
