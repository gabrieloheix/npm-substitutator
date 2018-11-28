
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttOptions } = require('../dist/Core/options/SttOptions')
const { SttOptionsBuilder } = require('../dist/Core/options/SttOptionsBuilder')


describe('2012-options', function() {

  const builder1 = (new SttOptionsBuilder()).setVerbose(true)


  // class

  describe('SttOptions class', function() {

    it('can be instantiated', function() {
      const options1 = new SttOptions(builder1)
      notEqual(options1, null)
    })

  })



  // isVerbose

  describe('isVerbose()', function() {

    it('returns verbose true', function() {
      const options1 = new SttOptions(builder1)
      const verbose = options1.isVerbose()
      strictEqual(verbose, true)
    })

    it('returns default verbose', function() {
      const builder2 = new SttOptionsBuilder()
      const options1 = new SttOptions(builder2)
      const verbose = options1.isVerbose()
      strictEqual(verbose, false)
    })

  })


})
