
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttContext } = require('../dist/Core')
const { SttContextProvider } = require('../dist/Core')
const { SttContextBuilder } = require('../dist/Core/context/SttContextBuilder')


describe('2043-contextprovider', function() {


  // class

  describe('SttContextProvider class', function() {

    it('can be instantiated', function() {
      const provider1 = new SttContextProvider()
      notEqual(provider1, null)
    })

  })



  // newFileRootContext

  describe('newFileRootContext()', function() {

    it('seems to return a new context', function() {
      const provider1 = new SttContextProvider()
      provider1.newFileRootContext('relative/path.txt')
    })

    it('returns a new context', function() {
      const provider1 = new SttContextProvider()
      const context1 = provider1.newFileRootContext('relative/path.txt')
      equal(context1 instanceof SttContext, true)
    })

    it('returns a new context with correct aggregated string', function() {
      const provider1 = new SttContextProvider()
      const context1 = provider1.newFileRootContext('relative/path.txt')
      const filepath = context1.getAggregatedString()
      strictEqual(filepath, 'relative/path.txt')
    })

  })



  // newBlockNameContext

  describe('newBlockNameContext()', function() {

    it('seems to return a new context', function() {
      const builder1 = new SttContextBuilder()
      const context1 = new SttContext(builder1)
      const provider1 = new SttContextProvider()
      provider1.newBlockNameContext(context1)
    })

    it('returns a new context', function() {
      const builder1 = new SttContextBuilder()
      const context1 = new SttContext(builder1)
      const provider1 = new SttContextProvider()
      const context2 = provider1.newBlockNameContext(context1)
      equal(context2 instanceof SttContext, true)
    })

    it('returns a new context with is naming phase true', function() {
      const builder1 = new SttContextBuilder()
      const context1 = new SttContext(builder1)
      const provider1 = new SttContextProvider()
      const context2 = provider1.newBlockNameContext(context1)
      equal(context2 instanceof SttContext, true)
      const phase = context2.isNamingPhase()
      strictEqual(phase, true)
    })

  })



  // newBlockDefinitionContext

  describe('newBlockDefinitionContext()', function() {

    it('seems to return a new context', function() {
      const builder1 = new SttContextBuilder()
      const context1 = new SttContext(builder1)
      const provider1 = new SttContextProvider()
      provider1.newBlockDefinitionContext(context1, 109)
    })

    it('returns a new context', function() {
      const builder1 = new SttContextBuilder()
      const context1 = new SttContext(builder1)
      const provider1 = new SttContextProvider()
      const context2 = provider1.newBlockDefinitionContext(context1, 109)
      equal(context2 instanceof SttContext, true)
    })

    it('returns a new context with correct offset', function() {
      const builder1 = new SttContextBuilder()
      const context1 = new SttContext(builder1)
      const provider1 = new SttContextProvider()
      const context2 = provider1.newBlockDefinitionContext(context1, 109)
      const offset = context2.getOffset()
      strictEqual(offset, 109)
    })

  })


})
