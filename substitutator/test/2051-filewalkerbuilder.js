
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttFileReaderProvider } = require('../dist/Util')
const { SttFileInfoProvider } = require('../dist/Util')

const { SttCompendium } = require('../dist/Core')
const { SttBlockProvider } = require('../dist/Core')
const { SttContextProvider } = require('../dist/Core')

const { SttFileWalker } = require('../dist/Core')
const { SttFileWalkerBuilder } = require('../dist/Core/filewalker/SttFileWalkerBuilder')


describe('2051-filewalkerbuilder', function() {

  const compendium1 = new SttCompendium()
  const blockProvider1 = new SttBlockProvider()
  const contextProvider1 = new SttContextProvider()
  const fileReaderProvider1 = new SttFileReaderProvider()
  const fileInfoProvider1 = new SttFileInfoProvider()


  // class

  describe('SttFileWalkerBuilder class', function() {

    it('can be instantiated', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      notEqual(builder, null)
    })

  })



  // getFileReaderProvider

  describe('getFileReaderProvider()', function() {

    it('returns something', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const fileReaderProvider2 = builder.getFileReaderProvider()
      notEqual(fileReaderProvider2, null)
    })

    it('returns a FileReaderProvider', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const fileReaderProvider2 = builder.getFileReaderProvider()
      equal(fileReaderProvider2 instanceof SttFileReaderProvider, true)
    })

    it('returns the correct FileReaderProvider', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const fileReaderProvider2 = builder.getFileReaderProvider()
      strictEqual(fileReaderProvider2, fileReaderProvider1)
    })

  })



  // getContextProvider

  describe('getContextProvider()', function() {

    it('returns something', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const contextProvider2 = builder.getContextProvider()
      notEqual(contextProvider2, null)
    })

    it('returns a ContextProvider', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const contextProvider2 = builder.getContextProvider()
      equal(contextProvider2 instanceof SttContextProvider, true)
    })

    it('returns the correct ContextProvider', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const contextProvider2 = builder.getContextProvider()
      strictEqual(contextProvider2, contextProvider1)
    })

  })



  // getBlockProvider

  describe('getBlockProvider()', function() {

    it('returns something', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const blockProvider2 = builder.getBlockProvider()
      notEqual(blockProvider2, null)
    })

    it('returns a BlockProvider', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const blockProvider2 = builder.getBlockProvider()
      equal(blockProvider2 instanceof SttBlockProvider, true)
    })

    it('returns the correct BlockProvider', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const blockProvider2 = builder.getBlockProvider()
      strictEqual(blockProvider2, blockProvider1)
    })

  })



  // getCompendium

  describe('getCompendium()', function() {

    it('returns something', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const compendium2 = builder.getCompendium()
      notEqual(compendium2, null)
    })

    it('returns a BlockProvider', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const compendium2 = builder.getCompendium()
      equal(compendium2 instanceof SttCompendium, true)
    })

    it('returns the correct BlockProvider', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const compendium2 = builder.getCompendium()
      strictEqual(compendium2, compendium1)
    })

  })



  // setFileInfo/getFileInfo

  describe('setFileInfo()/getFileInfo()', function() {

    it('seems to set file info', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const fileInfo1 = fileInfoProvider1.newSttFileInfo('path1')
      builder.setFileInfo(fileInfo1)
    })

    it('returns the correct file info', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const fileInfo1 = fileInfoProvider1.newSttFileInfo('path1')
      builder.setFileInfo(fileInfo1)
      const fileInfo2 = builder.getFileInfo()
      strictEqual(fileInfo2, fileInfo1)
    })

    it('returns file info with correct path', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const fileInfo1 = fileInfoProvider1.newSttFileInfo('path1')
      builder.setFileInfo(fileInfo1)
      const fileInfo2 = builder.getFileInfo()
      const path1 = fileInfo2.getPath()
      strictEqual(path1, 'path1')
    })

  })



  // build

  describe('build()', function() {

    it('seems to build the file walker', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      builder.build()
    })

    it('builds a file walker', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const filewalker1 = builder.build()
      equal(filewalker1 instanceof SttFileWalker, true)
    })

    it('builds a file walker with path', function() {
      const builder = new SttFileWalkerBuilder(compendium1, fileReaderProvider1, contextProvider1, blockProvider1)
      const fileInfo1 = fileInfoProvider1.newSttFileInfo('path1')
      builder.setFileInfo(fileInfo1)
      const filewalker1 = builder.build()
      equal(filewalker1 instanceof SttFileWalker, true)
    })

  })


})
