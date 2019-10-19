var Code = require('code')
var Lab = require('lab')

var isNegativeInteger = require('../index.js')
var isSafeNegativeInteger = isNegativeInteger.isSafeNegativeInteger

var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var expect = Code.expect

describe('is-negative-integer', function () {
  it('should return true for negative integers', function (done) {
    expect(isNegativeInteger(-1)).to.equal(true)
    expect(isNegativeInteger(-10)).to.equal(true)
    expect(isNegativeInteger(-100)).to.equal(true)
    expect(isNegativeInteger(-1000)).to.equal(true)
    expect(isNegativeInteger(-90071992555)).to.equal(true)
    expect(isNegativeInteger(-999999999999)).to.equal(true)
    expect(isNegativeInteger(MIN_SAFE_INTEGER)).to.equal(true)
    expect(isNegativeInteger(Number.MIN_VALUE)).to.equal(true)
    expect(isNegativeInteger(new Number(-12))).to.equal(true)
    done()
  })

  it('should return false for positive integers or zero', function (done) {
    expect(isNegativeInteger(0)).to.equal(false)
    expect(isNegativeInteger(1)).to.equal(false)
    expect(isNegativeInteger(10)).to.equal(false)
    expect(isNegativeInteger(100)).to.equal(false)
    expect(isNegativeInteger(1000)).to.equal(false)
    expect(isNegativeInteger(new Number(0))).to.equal(false)
    expect(isNegativeInteger(new Number(12))).to.equal(false)
    done()
  })

  it('should return false for floats', function (done) {
    expect(isNegativeInteger(-1.1)).to.equal(false)
    expect(isNegativeInteger(-10.1)).to.equal(false)
    expect(isNegativeInteger(-100.1)).to.equal(false)
    expect(isNegativeInteger(-1000.1)).to.equal(false)
    expect(isNegativeInteger(1.1)).to.equal(false)
    expect(isNegativeInteger(10.1)).to.equal(false)
    expect(isNegativeInteger(100.1)).to.equal(false)
    expect(isNegativeInteger(1000.1)).to.equal(false)
    expect(isNegativeInteger(new Number(-12.45))).to.equal(false)
    done()
  })

  it('should return false for others', function (done) {
    expect(isNegativeInteger(Infinity)).to.equal(false)
    expect(isNegativeInteger({})).to.equal(false)
    expect(isNegativeInteger([])).to.equal(false)
    expect(isNegativeInteger('-10')).to.equal(false)
    expect(isNegativeInteger('what')).to.equal(false)
    expect(isNegativeInteger(/what/)).to.equal(false)
    expect(isNegativeInteger(null)).to.equal(false)
    expect(isNegativeInteger(undefined)).to.equal(false)
    expect(isNegativeInteger(true)).to.equal(false)
    expect(isNegativeInteger({ valueOf: function () { return -42 } })).to.equal(false)
    expect(isNegativeInteger(Number.NaN)).to.equal(false)
    done()
  })

  describe('isSafeNegativeInteger', function() {
    it('should return true for negative integers', function (done) {
      expect(isSafeNegativeInteger(-1)).to.equal(true)
      expect(isSafeNegativeInteger(-10)).to.equal(true)
      expect(isSafeNegativeInteger(-100)).to.equal(true)
      expect(isSafeNegativeInteger(-1000)).to.equal(true)
      expect(isSafeNegativeInteger(-90071992555)).to.equal(true)
      expect(isSafeNegativeInteger(-999999999999)).to.equal(true)
      expect(isSafeNegativeInteger(MIN_SAFE_INTEGER)).to.equal(true)
      expect(isSafeNegativeInteger(Number.MIN_VALUE)).to.equal(false)
      done()
    })
  })
})
