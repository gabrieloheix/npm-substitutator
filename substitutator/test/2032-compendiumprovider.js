
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttCompendium } = require('../dist/Core/compendium/SttCompendium')
const { SttCompendiumProvider } = require('../dist/Core/SttCompendiumProvider')


describe('2032-compendiumprovider', function() {


  // class

  describe('SttCompendiumProvider class', function() {

    it('can be instantiated', function() {
      const provider1 = new SttCompendiumProvider()
      notEqual(provider1, null)
    })

  })



  // newCompendium

  describe('newCompendium()', function() {

    it('seems to return a new compendium', function() {
      const provider1 = new SttCompendiumProvider()
      const compendium1 = provider1.newCompendium()
    })

    it('returns a new compendium', function() {
      const provider1 = new SttCompendiumProvider()
      const compendium1 = provider1.newCompendium()
      equal(compendium1 instanceof SttCompendium, true)
    })

  })


})
