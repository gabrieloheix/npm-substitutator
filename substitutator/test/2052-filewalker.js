
const { equal, strictEqual, notEqual, throws, doesNotThrow } = require('assert')

const { SttFileInfoProvider } = require('../dist/Util')
const { SttFileReaderProvider } = require('../dist/Util')

const { SttCompendium } = require('../dist/Core')
const { SttBlockProvider } = require('../dist/Core/SttBlockProvider')
const { SttContextProvider } = require('../dist/Core/SttContextProvider')

const { SttFileWalker } = require('../dist/Core/filewalker/SttFileWalker')
const { SttFileWalkerBuilder } = require('../dist/Core/filewalker/SttFileWalkerBuilder')


describe('2052-filewalker', function() {

  const compendium1 = new SttCompendium()
  const blockProvider1 = new SttBlockProvider()
  const contextProvider1 = new SttContextProvider()
  const fileInfoProvider1 = new SttFileInfoProvider()
  const fileReaderProvider1 = new SttFileReaderProvider()
  const fileWalkerBuilder1 = new SttFileWalkerBuilder(compendium1,
        fileReaderProvider1, fileInfoProvider1, contextProvider1, blockProvider1)


  // class

  describe('SttFileWalker class', function() {

    it('can be instantiated', function() {
      const fileWalker1 = new SttFileWalker(fileWalkerBuilder1)
      notEqual(fileWalker1, null)
    })

  })



  // walk

  describe('walk()', function() {

    it('seems to walk through the file', function() {
      doesNotThrow(function() {
        const fileWalkerBuilder2 = new SttFileWalkerBuilder(compendium1,
              fileReaderProvider1, contextProvider1, blockProvider1)
        const fileInfo = fileInfoProvider1.newSttFileInfo('test/examples/lorem.txt')
        const fileWalker2 = fileWalkerBuilder2.setFileInfo(fileInfo).build()
        fileWalker2.walk()
      }, /walk\(\) cannot walk through the file without raising an exception/);
    })

    it('returns true after walking through the file', function() {
      const fileWalkerBuilder2 = new SttFileWalkerBuilder(compendium1,
        fileReaderProvider1, contextProvider1, blockProvider1)
      const fileInfo = fileInfoProvider1.newSttFileInfo('test/examples/lorem.txt')
      const fileWalker2 = fileWalkerBuilder2.setFileInfo(fileInfo).build()
      const done = fileWalker2.walk()
      strictEqual(done, true)
    })

  })


})
