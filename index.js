/* $lab:coverage:off$ */
var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991
/* $lab:coverage:on$ */

module.exports = isNegativeInteger
module.exports.isSafeNegativeInteger = isSafeNegativeInteger

function isNegativeInteger (x) {
  // Is it a number?
  return Object.prototype.toString.call(x) === '[object Number]' &&
    // Is it an integer?
    x % 1 === 0 &&
    // Is it negative?
    x < 0
}

// strict negative integer check:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
function isSafeNegativeInteger (x) {
  return isNegativeInteger(x) &&
    x >= MIN_SAFE_INTEGER
}
