
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttFileInfoProvider } = require('../dist/Util')
const { SttFileReaderProvider } = require('../dist/Util')

const { SttCompendium } = require('../dist/Core')
const { SttFileWalker } = require('../dist/Core')

const { SttBlockProvider } = require('../dist/Core')
const { SttContextProvider } = require('../dist/Core')
const { SttFileWalkerProvider } = require('../dist/Core')


describe('2053-filewalkerprovider', function() {

  const compendium1 = new SttCompendium()
  const blockProvider1 = new SttBlockProvider()
  const contextProvider1 = new SttContextProvider()
  const fileInfoProvider1 = new SttFileInfoProvider()
  const fileReaderProvider1 = new SttFileReaderProvider()


  // class

  describe('SttFileWalkerProvider class', function() {

    it('can be instantiated', function() {
      const provider1 = new SttFileWalkerProvider(compendium1,
            fileReaderProvider1, fileInfoProvider1, contextProvider1, blockProvider1)
      notEqual(provider1, null)
    })

  })



  // newFileWalker

  describe('newFileWalker()', function() {

    it('seems to return a new file walker', function() {
      const provider1 = new SttFileWalkerProvider(compendium1,
            fileReaderProvider1, fileInfoProvider1, contextProvider1, blockProvider1)
      const fileWalker = provider1.newFileWalker('example.txt')
    })

    it('returns a new file walker', function() {
      const provider1 = new SttFileWalkerProvider(compendium1,
            fileReaderProvider1, fileInfoProvider1, contextProvider1, blockProvider1)
      const fileWalker = provider1.newFileWalker('example.txt')
      equal(fileWalker instanceof SttFileWalker, true)
    })

    it.skip('returns a new file walker that checks file does exist', function() {
    })

    it('returns a new file walker that walks', function() {
      const provider1 = new SttFileWalkerProvider(compendium1,
            fileReaderProvider1, fileInfoProvider1, contextProvider1, blockProvider1)
      const fileWalker = provider1.newFileWalker('test/examples/lorem.txt')
      fileWalker.walk()
    })

  })


})
