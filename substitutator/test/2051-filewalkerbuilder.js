
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttCompendium } = require('../dist/Core')
const { SttBlockProvider } = require('../dist/Core/SttBlockProvider')
const { SttContextProvider } = require('../dist/Core/SttContextProvider')

const { SttFileWalker } = require('../dist/Core/filewalker/SttFileWalker')
const { SttFileWalkerBuilder } = require('../dist/Core/filewalker/SttFileWalkerBuilder')


describe('2051-filewalkerbuilder', function() {

  const compendium1 = new SttCompendium()
  const blockProvider1 = new SttBlockProvider()
  const contextProvider1 = new SttContextProvider()


  // class

  describe('SttFileWalkerBuilder class', function() {

    it('can be instantiated', function() {
      const builder = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)
      notEqual(builder, null)
    })

  })



  // getContextProvider

  describe('getContextProvider()', function() {

    it('returns something', function() {
      const builder = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)
      const contextProvider2 = builder.getContextProvider()
      notEqual(contextProvider2, null)
    })

    it('returns a ContextProvider', function() {
      const builder = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)
      const contextProvider2 = builder.getContextProvider()
      equal(contextProvider2 instanceof SttContextProvider, true)
    })

    it('returns the correct ContextProvider', function() {
      const builder = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)
      const contextProvider2 = builder.getContextProvider()
      strictEqual(contextProvider2, contextProvider1)
    })

  })



  // getBlockProvider

  describe('getBlockProvider()', function() {

    it('returns something', function() {
      const builder = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)
      const blockProvider2 = builder.getBlockProvider()
      notEqual(blockProvider2, null)
    })

    it('returns a BlockProvider', function() {
      const builder = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)
      const blockProvider2 = builder.getBlockProvider()
      equal(blockProvider2 instanceof SttBlockProvider, true)
    })

    it('returns the correct BlockProvider', function() {
      const builder = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)
      const blockProvider2 = builder.getBlockProvider()
      strictEqual(blockProvider2, blockProvider1)
    })

  })



  // getCompendium

  describe('getCompendium()', function() {

    it('returns something', function() {
      const builder = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)
      const compendium2 = builder.getCompendium()
      notEqual(compendium2, null)
    })

    it('returns a BlockProvider', function() {
      const builder = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)
      const compendium2 = builder.getCompendium()
      equal(compendium2 instanceof SttCompendium, true)
    })

    it('returns the correct BlockProvider', function() {
      const builder = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)
      const compendium2 = builder.getCompendium()
      strictEqual(compendium2, compendium1)
    })

  })



  // setPath/getPath

  describe('setPath()/getPath()', function() {

    it('seems to set path', function() {
      const builder = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)
      builder.setPath('path1')
    })

    it('returns the correct path', function() {
      const builder = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)
      builder.setPath('path1')
      const path1 = builder.getPath()
      strictEqual(path1, 'path1')
    })

    it('returns default path', function() {
      const builder = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)
      const path1 = builder.getPath()
      strictEqual(path1, '')
    })

  })



  // build

  describe('build()', function() {

    it('seems to build the file walker', function() {
      const builder = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)
      builder.build()
    })

    it('builds a file walker', function() {
      const builder = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)
      const filewalker1 = builder.build()
      equal(filewalker1 instanceof SttFileWalker, true)
    })

    it.skip('builds a file walker with path', function() {
      const builder = new SttFileWalkerBuilder(compendium1, contextProvider1, blockProvider1)
      builder.setPath('path1')
      const filewalker1 = builder.build()
      const path1 = filewalker1.getPath()
      strictEqual(path1, 'path1')
    })

  })


})
