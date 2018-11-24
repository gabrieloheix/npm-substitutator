
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttCompendium } = require('../dist/Core')


describe('2011-compendium', function() {


  // class

  describe('SttCompendium class', function() {

    it('can be instantiated', function() {
      const compendium = new SttCompendium()
      notEqual(compendium, null)
    })

  })



  // addBlock

  describe('addBlock()', function() {

    it('seems to add the block', function() {
      const compendium = new SttCompendium()
      compendium.addBlock('block1', 'example1')
    })

  })



  // blockExists

  describe('blockExists()', function() {

    it('returns false when block does not exist', function() {
      const compendium = new SttCompendium()
      const exists = compendium.blockExists('block1', 'example1')
      strictEqual(exists, false)
    })

    it.skip('returns true when block has been added', function() {
      const compendium = new SttCompendium()
      compendium.addBlock('block1', 'example1')
      const exists = compendium.blockExists('block1', 'example1')
      strictEqual(exists, true)
    })

    it.skip('returns true when fullpath is different', function() {
      const compendium = new SttCompendium()
      compendium.addBlock('block1', 'example1')
      const exists = compendium.blockExists('block1', 'example2')
      strictEqual(exists, true)
    })

  })



  // getBlock

  describe('getBlock()', function() {

    it('returns block', function() {
      const compendium = new SttCompendium()
      compendium.addBlock('block1', 'example1')
      const block = compendium.getBlock('block1', 'example1')
      notEqual(block, null)
    })

    it.skip('throws if block does not exist', function() {
      const compendium = new SttCompendium()
      throws(function () {
        compendium.getBlock('block1', 'example1')
      })
    })

  })


})
