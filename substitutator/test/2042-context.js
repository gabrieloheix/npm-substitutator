
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttStringBuilder } = require('../dist/Util')

const { SttContext } = require('../dist/Core/context/SttContext')
const { SttContextBuilder } = require('../dist/Core/context/SttContextBuilder')


describe('2042-context', function() {

  const builder1 = new SttContextBuilder()


  // class

  describe('SttContext class', function() {

    it('can be instantiated', function() {
      const context1 = new SttContext(builder1)
      notEqual(context1, null)
    })

  })



  // getParentContext

  describe('getParentContext()', function() {

    it.skip('returns parent context', function() {
    })

    it.skip('returns default so null parent context', function() {
    })

    // or 

    it.skip('throws/print error when parent context is not set', function() {
    })

  })



  // isNamingPhase

  describe('isNamingPhase()', function() {

    it('returns is naming phase true', function() {
      const builder2 = new SttContextBuilder()
      builder2.setNamingPhase(true)
      const context1 = new SttContext(builder2)
      const is = context1.isNamingPhase()
      strictEqual(is, true)
    })

    it('returns default is naming phase', function() {
      const builder2 = new SttContextBuilder()
      const context1 = new SttContext(builder2)
      const is = context1.isNamingPhase()
      strictEqual(is, false)
    })

  })



  // getAggregatedString

  describe('getAggregatedString()', function() {

    it('returns empty aggregated string', function() {
      const stringBuilder = new SttStringBuilder()
      const builder2 = new SttContextBuilder()
      builder2.setAggregated(stringBuilder)
      const context1 = new SttContext(builder2)
      const str = context1.getAggregatedString()
      strictEqual(str, '')
    })

    it('returns correct aggregated string', function() {
      const stringBuilder = new SttStringBuilder()
      stringBuilder.append('a string ')
      const builder2 = new SttContextBuilder()
      builder2.setAggregated(stringBuilder)
      const context1 = new SttContext(builder2)
      const str = context1.getAggregatedString()
      strictEqual(str, 'a string ')
    })

    it('returns default aggregated string', function() {
      const builder2 = new SttContextBuilder()
      const context1 = new SttContext(builder2)
      const str = context1.getAggregatedString()
      strictEqual(str, '')
    })

  })



  // feedAggregated

  describe('feedAggregated()', function() {

    it('seems to feed aggregated', function() {
      const stringBuilder = new SttStringBuilder()
      stringBuilder.append('a string ')
      const builder2 = new SttContextBuilder()
      builder2.setAggregated(stringBuilder)
      const context1 = new SttContext(builder2)
      context1.feedAggregated('aggregated')
    })

    it('returns feed aggregated based on default string', function() {
      const builder2 = new SttContextBuilder()
      const context1 = new SttContext(builder2)
      context1.feedAggregated('aggregated')
      const str = context1.getAggregatedString()
      strictEqual(str, 'aggregated')
    })

    it('returns feed aggregated based on existing empty string', function() {
      const stringBuilder = new SttStringBuilder()
      const builder2 = new SttContextBuilder()
      builder2.setAggregated(stringBuilder)
      const context1 = new SttContext(builder2)
      context1.feedAggregated('aggregated ')
      const str = context1.getAggregatedString()
      strictEqual(str, 'aggregated ')
    })

    it('returns feed aggregated based on existing string', function() {
      const stringBuilder = new SttStringBuilder()
      stringBuilder.append('a string ')
      const builder2 = new SttContextBuilder()
      builder2.setAggregated(stringBuilder)
      const context1 = new SttContext(builder2)
      context1.feedAggregated('aggregated')
      const str = context1.getAggregatedString()
      strictEqual(str, 'a string aggregated')
    })

  })



  // getOffset

  describe('getOffset()', function() {

    it('returns correct offset', function() {
      const builder2 = new SttContextBuilder()
      builder2.setOffset(78)
      const context1 = new SttContext(builder2)
      const offset = context1.getOffset()
      strictEqual(offset, 78)
    })

    it('returns default offset', function() {
      const builder2 = new SttContextBuilder()
      const context1 = new SttContext(builder2)
      const offset = context1.getOffset()
      strictEqual(offset, 0)
    })

  })


})
