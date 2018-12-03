
describe('0001-assert', function() {


  // assert

  describe('\'assert\'', function() {

    it('can be loaded with require()', function(){
      require('assert');
    })

    it('is an object or a function', function(){
      const assert = require('assert');
      const fail = (typeof assert !== 'object' && typeof assert !== 'function')
      if (fail) {
        throw new Error('assert from require() is not an object or a function')
      }
    })

  })



  // equal

  describe('equal()', function() {

    it('is a function', function(){
      const assert = require('assert');
      const fail = (typeof assert.equal !== 'function')
      if (fail) {
        throw new Error('assert.equal() is not a function')
      }
    })

    it('true equals true', function(){
      const assert = require('assert');
      assert.equal(true, true)
    })

    it('false equals false', function(){
      const assert = require('assert');
      assert.equal(false, false)
    })

    it('1 equals true', function(){
      const assert = require('assert');
      assert.equal(1, true)
    })

    it('0 equals false', function(){
      const assert = require('assert');
      assert.equal(0, false)
    })

  })



  // notEqual

  describe('notEqual()', function() {

    it('is a function', function(){
      const assert = require('assert');
      const fail = (typeof assert.notEqual !== 'function')
      assert.equal(fail, false)
    })

    it('true does not equal false', function(){
      const assert = require('assert');
      assert.notEqual(true, false)
    })

    it('false does not equal true', function(){
      const assert = require('assert');
      assert.notEqual(false, true)
    })

  })



  // strictEqual

  describe('strictEqual()', function() {

    it('is a function', function(){
      const assert = require('assert');
      const fail = (typeof assert.strictEqual !== 'function')
      assert.equal(fail, false)
    })

    it('true equals true', function(){
      const assert = require('assert');
      assert.strictEqual(true, true)
    })

    it('false equals false', function(){
      const assert = require('assert');
      assert.strictEqual(false, false)
    })

  })



  // throws

  describe('throws()', function() {

    it('is a function', function(){
      const assert = require('assert');
      const fail = (typeof assert.throws !== 'function')
      assert.equal(fail, false)
    })

    it('will catch a custom new Error', function(){
      const assert = require('assert');
      assert.throws(function() {
        throw new Error('Should never go that far')
      })
    })

    it('will catch 1 strict equal true', function(){
      const assert = require('assert');
      assert.throws(function() {
        assert.strictEqual(1, true)
      })
    })

    it('will catch 0 strict equal false', function(){
      const assert = require('assert');
      assert.throws(function() {
        assert.strictEqual(0, false)
      })
    })

  })


})
