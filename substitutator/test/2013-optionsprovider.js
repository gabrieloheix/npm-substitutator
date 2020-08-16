
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttOptions } = require('../dist/Core')
const { SttOptionsProvider } = require('../dist/Core')


describe('2013-optionsprovider', function() {

  const optionsObj1 = { verbose: true }


  // class

  describe('SttOptionsProvider class', function() {

    it('can be instantiated', function() {
      const provider1 = new SttOptionsProvider()
      notEqual(provider1, null)
    })

  })



  // parseOptions

  describe('parseOptions()', function() {

    it('seems to parse options', function() {
      const provider1 = new SttOptionsProvider()
      const options1 = provider1.parseOptions(optionsObj1)
    })

    it('seems to parse empty options', function() {
      const provider1 = new SttOptionsProvider()
      const options1 = provider1.parseOptions({})
    })

    it('returns parsed options', function() {
      const provider1 = new SttOptionsProvider()
      const options1 = provider1.parseOptions(optionsObj1)
      equal(options1 instanceof SttOptions, true)
    })

    it('returns parsed options with verbose true', function() {
      const provider1 = new SttOptionsProvider()
      const options1 = provider1.parseOptions(optionsObj1)
      const verbose = options1.isVerbose()
      strictEqual(verbose, true)
    })

  })


})
