
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttOptions } = require('../dist/Core')
const { SttOptionsBuilder } = require('../dist/Core/options/SttOptionsBuilder')


describe('2011-optionsbuilder', function() {


  // class

  describe('SttOptionsBuilder class', function() {

    it('can be instantiated', function() {
      const builder = new SttOptionsBuilder()
      notEqual(builder, null)
    })

  })



  // setVerbose/getVerbose

  describe('setVerbose()/getVerbose()', function() {

    it('seems to set verbose', function() {
      const builder = new SttOptionsBuilder()
      builder.setVerbose(true)
    })

    it('returns verbose true', function() {
      const builder = new SttOptionsBuilder()
      builder.setVerbose(true)
      const verbose = builder.getVerbose()
      strictEqual(verbose, true)
    })

    it('returns verbose false', function() {
      const builder = new SttOptionsBuilder()
      builder.setVerbose(false)
      const verbose = builder.getVerbose()
      strictEqual(verbose, false)
    })

  })



  // build

  describe('build()', function() {

    it('seems to build the options', function() {
      const builder = new SttOptionsBuilder()
      builder.build()
    })

    it('builds options', function() {
      const builder = new SttOptionsBuilder()
      const options = builder.build()
      equal(options instanceof SttOptions, true)
    })

    it('builds options with verbose true', function() {
      const builder = new SttOptionsBuilder()
      builder.setVerbose(true)
      const options = builder.build()
      const verbose = options.isVerbose()
      strictEqual(verbose, true)
    })

  })


})
