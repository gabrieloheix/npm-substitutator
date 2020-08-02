
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttContext } = require('../dist/Core/context/SttContext')
const { SttContextBuilder } = require('../dist/Core/context/SttContextBuilder')


describe('2041-contextbuilder', function() {


  // class

  describe('SttContextBuilder class', function() {

    it('can be instantiated', function() {
      const builder = new SttContextBuilder()
      notEqual(builder, null)
    })

  })



  // setBlockName/getBlockName

  describe('setBlockName()/getBlockName()', function() {

    it.skip('seems to set is block name', function() {
      const builder = new SttContextBuilder()
      builder.setBlockName(true)
    })

    it.skip('returns is block name true', function() {
      const builder = new SttContextBuilder()
      builder.setBlockName(true)
      const is = builder.getBlockName()
      strictEqual(is, true)
    })

    it.skip('returns default is block name', function() {
      const builder = new SttContextBuilder()
      const is = builder.getBlockName()
      strictEqual(is, false)
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

    it.skip('builds a context with is block name', function() {
      const builder = new SttContextBuilder()
      builder.setBlockName(true)
      const context = builder.build()
      const is = context.isBlockName()
      strictEqual(is, true)
    })

  })


})
