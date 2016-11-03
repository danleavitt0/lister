/**
 * Expose selfClosingTags
 */

var tags = module.exports = [
  'area',
  'base',
  'br',
  'col',
  'command',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
]

tags.index = tags.reduce(function (memo, tag) {
  memo[tag] = true
  return memo
}, Object.create(null))
