
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttBlock } = require('../dist/Core/block/SttBlock')
const { SttBlockProvider } = require('../dist/Core/SttBlockProvider')


describe('2023-blockprovider', function() {


  // class

  describe('SttBlockProvider class', function() {

    it('can be instantiated', function() {
      const provider1 = new SttBlockProvider()
      notEqual(provider1, null)
    })

  })



  // newBlock

  describe('newBlock()', function() {

    it('seems to return a new block', function() {
      const provider1 = new SttBlockProvider()
      const block1 = provider1.newBlock('name 1')
    })

    it('returns a new block', function() {
      const provider1 = new SttBlockProvider()
      const block1 = provider1.newBlock('name 1')
      equal(block1 instanceof SttBlock, true)
    })

    it('returns a new block with name', function() {
      const provider1 = new SttBlockProvider()
      const block1 = provider1.newBlock('name 1')
      const name = block1.getName()
      strictEqual(name, 'name 1')
    })

  })


})
