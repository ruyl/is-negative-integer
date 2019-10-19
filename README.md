# is-negative-integer 
Check if a number is a negative integer (forked from https://www.npmjs.com/package/is-positive-integer)

# Installation
```bash
npm --save i is-negative-integer
```

# Usage
```js
var isNegativeInteger = require('is-negative-integer')

isNegativeInteger(-1) // true
isNegativeInteger(-10) // true
isNegativeInteger(-100) // true
isNegativeInteger(-1000) // true
isNegativeInteger(0) // false
isNegativeInteger(1) // false
isNegativeInteger(10) // false
isNegativeInteger(100) // false
isNegativeInteger(1000) // false
isNegativeInteger(-1.1) // false
isNegativeInteger(-10.1) // false
isNegativeInteger(-100.1) // false
isNegativeInteger(-1000.1) // false
isNegativeInteger(1.1) // false
isNegativeInteger(10.1) // false
isNegativeInteger(100.1) // false
isNegativeInteger(1000.1) // false
isNegativeInteger(-Infinity) // false
isNegativeInteger({}) // false
isNegativeInteger([]) // false
isNegativeInteger('-10') // false
isNegativeInteger('what') // false
isNegativeInteger(/what/) // false
isNegativeInteger(null) // false
// ...
```

### isSafeNegativeInteger
Ensure negative integer greater than or equal to `Number.MIN_SAFE_INTEGER`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
```js
var isSafeNegativeInteger = require('is-negative-integer').isSafeNegativeInteger
// min safe integer doesn't exist in older engines
var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || 9007199254740991

isSafeNegativeInteger(MIN_SAFE_INTEGER) // true
isSafeNegativeInteger(MIN_SAFE_INTEGER - 1) // false
isSafeNegativeInteger(Number.MIN_VALUE) // false
// ...
```

# License
MIT
