
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttCompendium } = require('../dist/Core')
const { SttBlockProvider } = require('../dist/Core/SttBlockProvider')
const { SttContextProvider } = require('../dist/Core/SttContextProvider')

const { SttFileWalker } = require('../dist/Core/filewalker/SttFileWalker')
const { SttFileWalkerBuilder } = require('../dist/Core/filewalker/SttFileWalkerBuilder')


describe('2052-filewalker', function() {

  const compendium1 = new SttCompendium()
  const blockProvider1 = new SttBlockProvider()
  const contextProvider1 = new SttContextProvider()
  const fileWalkerBuilder1 = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)


  // class

  describe('SttFileWalker class', function() {

    it('can be instantiated', function() {
      const fileWalker1 = new SttFileWalker(fileWalkerBuilder1)
      notEqual(fileWalker1, null)
    })

  })



  // todo()


})
