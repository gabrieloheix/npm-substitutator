
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttBlock } = require('../dist/Core/block/SttBlock')
const { SttBlockBuilder } = require('../dist/Core/block/SttBlockBuilder')


describe('2021-blockbuilder', function() {


  // class

  describe('SttBlockBuilder class', function() {

    it('can be instantiated', function() {
      const builder = new SttBlockBuilder()
      notEqual(builder, null)
    })

  })



  // setName/getName

  describe('setName()/getName()', function() {

    it('seems to set the name', function() {
      const builder = new SttBlockBuilder()
      builder.setName('name 1')
    })

    it('returns the name', function() {
      const builder = new SttBlockBuilder()
      builder.setName('name 1')
      const name = builder.getName()
      strictEqual(name, 'name 1')
    })

    it('returns an empty name', function() {
      const builder = new SttBlockBuilder()
      const name = builder.getName()
      strictEqual(name, '')
    })

  })



  // build

  describe('build()', function() {

    it('seems to build the block', function() {
      const builder = new SttBlockBuilder()
      builder.build()
    })

    it('builds a block', function() {
      const builder = new SttBlockBuilder()
      const block = builder.build()
      equal(block instanceof SttBlock, true)
    })

    it('builds a block with name', function() {
      const builder = new SttBlockBuilder()
      builder.setName('name 1')
      const block = builder.build()
      const name = block.getName()
      strictEqual(name, 'name 1')
    })

  })


})
