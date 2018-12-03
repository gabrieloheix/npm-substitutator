
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttDictionary } = require('../dist/Util')


describe('1031-dictionary', function() {


  // class

  describe('SttDictionary class', function() {

    it('can be instantiated', function() {
      const dictionary = new SttDictionary()
      notEqual(dictionary, null)
    })

  })



  // set

  describe('set()', function() {

    it('seems to set a string', function() {
      const dictionary = new SttDictionary()
      dictionary.set('key', 'value')
    })

    it('seems to set a number', function() {
      const dictionary = new SttDictionary()
      dictionary.set('key', 6)
    })

    it('seems to set an object', function() {
      const dictionary = new SttDictionary()
      dictionary.set('key', {})
    })

    it('seems to set a function', function() {
      const dictionary = new SttDictionary()
      dictionary.set('key', function() {})
    })

  })



  // get

  describe('get()', function() {

    it('returns the string', function() {
      const dictionary = new SttDictionary()
      dictionary.set('key', 'value')
      const value = dictionary.get('key')
      strictEqual(value, 'value')
    })

    it('returns the number', function() {
      const dictionary = new SttDictionary()
      dictionary.set('key', 6)
      const value = dictionary.get('key')
      strictEqual(value, 6)
    })

    it('returns the object', function() {
      const dictionary = new SttDictionary()
      const obj = {}
      dictionary.set('key', obj)
      const value = dictionary.get('key')
      strictEqual(value, obj)
    })

    it('returns the function', function() {
      const dictionary = new SttDictionary()
      const f = function() {}
      dictionary.set('key', f)
      const value = dictionary.get('key')
      strictEqual(value, f)
    })

    it('does not return anything', function() {
      const dictionary = new SttDictionary()
      const value = dictionary.get('key')
      equal(value, null)
      //throw?
    })

  })



  // has

  describe('has()', function() {

    it('the string', function() {
      const dictionary = new SttDictionary()
      dictionary.set('key', 'value')
      const has = dictionary.has('key')
      strictEqual(has, true)
    })

    it('the number', function() {
      const dictionary = new SttDictionary()
      dictionary.set('key', 6)
      const has = dictionary.has('key')
      strictEqual(has, true)
    })

    it('the object', function() {
      const dictionary = new SttDictionary()
      dictionary.set('key', {})
      const has = dictionary.has('key')
      strictEqual(has, true)
    })

    it('the function', function() {
      const dictionary = new SttDictionary()
      dictionary.set('key', function() {})
      const has = dictionary.has('key')
      strictEqual(has, true)
    })

    it('nothing', function() {
      const dictionary = new SttDictionary()
      const has = dictionary.has('key')
      strictEqual(has, false)
    })

  })


})
