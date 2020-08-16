
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttStringBuilder } = require('../dist/Util')

const { SttContext } = require('../dist/Core')
const { SttContextBuilder } = require('../dist/Core/context/SttContextBuilder')


describe('2041-contextbuilder', function() {


  // class

  describe('SttContextBuilder class', function() {

    it('can be instantiated', function() {
      const builder = new SttContextBuilder()
      notEqual(builder, null)
    })

  })



  // setParentContext/getParentContextArray

  describe('setParentContext()/getParentContextArray()', function() {

    // Needs to be done after 2042

    it.skip('seems to set parent context', function() {
    })

    it.skip('returns parent context', function() {
    })

  })



  // setNamingPhase/getNamingPhase

  describe('setNamingPhase()/getNamingPhase()', function() {

    it('seems to set naming phase', function() {
      const builder = new SttContextBuilder()
      builder.setNamingPhase(true)
    })

    it('returns naming phase true', function() {
      const builder = new SttContextBuilder()
      builder.setNamingPhase(true)
      const is = builder.getNamingPhase()
      strictEqual(is, true)
    })

    it('returns default naming phase', function() {
      const builder = new SttContextBuilder()
      const is = builder.getNamingPhase()
      strictEqual(is, false)
    })

  })



  // setAggregated/getAggregated

  describe('setAggregated()/getAggregated()', function() {

    it('seems to set aggregated', function() {
      const stringBuilder = new SttStringBuilder()
      stringBuilder.append('Lorem ')
      stringBuilder.append('ipsum ')
      stringBuilder.append('dolor ')
      stringBuilder.append('sit ')
      stringBuilder.append('amet.')
      const builder = new SttContextBuilder()
      builder.setAggregated(stringBuilder)
    })

    it('returns aggregated string', function() {
      const stringBuilder = new SttStringBuilder()
      stringBuilder.append('Lorem ')
      stringBuilder.append('ipsum ')
      stringBuilder.append('dolor ')
      stringBuilder.append('sit ')
      stringBuilder.append('amet.')
      const builder = new SttContextBuilder()
      builder.setAggregated(stringBuilder)
      const aggregated = builder.getAggregated()
      equal(aggregated instanceof SttStringBuilder, true)
      const to = aggregated.toString()
      strictEqual(to, 'Lorem ipsum dolor sit amet.')
    })

    it('returns default aggregated string', function() {
      const builder = new SttContextBuilder()
      const aggregated = builder.getAggregated()
      equal(aggregated instanceof SttStringBuilder, true)
      const to = aggregated.toString()
      strictEqual(to, '')
    })

  })



  // setOffset/getOffset

  describe('setOffset()/getOffset()', function() {

    it('seems to set offset', function() {
      const builder = new SttContextBuilder()
      builder.setOffset(9)
    })

    it('returns offset number', function() {
      const builder = new SttContextBuilder()
      builder.setOffset(9)
      const offset = builder.getOffset()
      strictEqual(offset, 9)
    })

    it('returns default offset', function() {
      const builder = new SttContextBuilder()
      const offset = builder.getOffset()
      strictEqual(offset, 0)
    })

  })



  // build

  describe('build()', function() {

    it('seems to build the context', function() {
      const builder = new SttContextBuilder()
      builder.build()
    })

    it('builds a context', function() {
      const builder = new SttContextBuilder()
      const context = builder.build()
      equal(context instanceof SttContext, true)
    })

    it('builds a context with is naming phase', function() {
      const builder = new SttContextBuilder()
      builder.setNamingPhase(true)
      const context = builder.build()
      const is = context.isNamingPhase()
      strictEqual(is, true)
    })

    it('builds a context with aggregated string', function() {
      const stringBuilder = new SttStringBuilder()
      stringBuilder.append('this ')
      stringBuilder.append('is ')
      stringBuilder.append('a ')
      stringBuilder.append('string')

      const builder = new SttContextBuilder()
      builder.setAggregated(stringBuilder)
      const context = builder.build()
      const aggregated = context.getAggregatedString()
      strictEqual(aggregated, 'this is a string')
    })

  })


})
