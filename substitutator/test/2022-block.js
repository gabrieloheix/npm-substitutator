
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttBlock } = require('../dist/Core/block/SttBlock')
const { SttBlockBuilder } = require('../dist/Core/block/SttBlockBuilder')


describe('2022-block', function() {

  const builder1 = (new SttBlockBuilder()).setName('name 1')


  // class

  describe('SttBlock class', function() {

    it('can be instantiated', function() {
      const block1 = new SttBlock(builder1)
      notEqual(block1, null)
    })

  })



  // getName

  describe('getName()', function() {

    it('returns the name', function() {
      const block1 = new SttBlock(builder1)
      const name = block1.getName()
      strictEqual(name, 'name 1')
    })

    it('returns an empty name', function() {
      const builder2 = new SttBlockBuilder()
      const block1 = new SttBlock(builder2)
      const name = block1.getName()
      strictEqual(name, '')
    })

  })


})
