/**
 * Constants
 */

var types = /^(?:submit|button|image|reset|file)$/i
var names = /^(?:input|select|textarea|keygen)$/i
var check = /^(?:checkbox|radio)$/i

/**
 * Expose isSubmittable
 */

module.exports = isSubmittable

/**
 * isSubmittable
 */

function isSubmittable (el) {
  return !el.disabled
    && el.name
    && !types.test(el.type)
    && names.test(el.nodeName)
    && (!check.test(el.type) || el.checked)
}
