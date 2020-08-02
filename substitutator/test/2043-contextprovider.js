
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttContext } = require('../dist/Core/context/SttContext')
const { SttContextProvider } = require('../dist/Core/SttContextProvider')


describe('2043-contextprovider', function() {


  // class

  describe('SttContextProvider class', function() {

    it('can be instantiated', function() {
      const provider1 = new SttContextProvider()
      notEqual(provider1, null)
    })

  })



  // newDefaultContext

  describe('newDefaultContext()', function() {

    it.skip('seems to return a new context', function() {
      const provider1 = new SttContextProvider()
      provider1.newDefaultContext()
    })

    it.skip('returns a new context', function() {
      const provider1 = new SttContextProvider()
      const context1 = provider1.newDefaultContext()
      equal(context1 instanceof SttContext, true)
    })

    it.skip('returns a new context with block name true', function() {
      const provider1 = new SttContextProvider()
      const context1 = provider1.newDefaultContext()
      const verbose = context1.isBlockName()
      strictEqual(verbose, false)
    })

  })


})
