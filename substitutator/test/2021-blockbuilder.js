
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttFileInfo } = require('../dist/Util/fileinfo/SttFileInfo')

const { SttBlock } = require('../dist/Core/block/SttBlock')
const { SttBlockBuilder } = require('../dist/Core/block/SttBlockBuilder')


describe('2021-blockbuilder', function() {

  const fileinfo1 = new SttFileInfo('path1')


  // class

  describe('SttBlockBuilder class', function() {

    it('can be instantiated', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      notEqual(builder, null)
    })

  })



  // getFileInfo

  describe('getFileInfo()', function() {

    it('returns a FileInfo', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      const info = builder.getFileInfo()
      equal(info instanceof SttFileInfo, true)
    })

    it('returns the correct FileInfo', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      const info = builder.getFileInfo()
      strictEqual(info, fileinfo1)
    })

  })



  // setName/getName

  describe('setName()/getName()', function() {

    it('seems to set the name', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      builder.setName('name 1')
    })

    it('returns the name', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      builder.setName('name 1')
      const name = builder.getName()
      strictEqual(name, 'name 1')
    })

    it('returns an empty name', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      const name = builder.getName()
      strictEqual(name, '')
    })

  })



  // setOffsetBegin/getOffsetBegin

  describe('setOffsetBegin()/getOffsetBegin()', function() {

    it('seems to set the offset begin', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      builder.setOffsetBegin(5)
    })

    it('returns the offset begin', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      builder.setOffsetBegin(5)
      const offset = builder.getOffsetBegin()
      strictEqual(offset, 5)
    })

    it('returns the default offset begin', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      const offset = builder.getOffsetBegin()
      strictEqual(offset, 0)
    })

  })



  // setOffsetEnd/getOffsetEnd

  describe('setOffsetEnd()/getOffsetEnd()', function() {

    it('seems to set the offset end', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      builder.setOffsetEnd(80)
    })

    it('returns the offset end', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      builder.setOffsetEnd(80)
      const offset = builder.getOffsetEnd()
      strictEqual(offset, 80)
    })

    it('returns the default offset end', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      const offset = builder.getOffsetEnd()
      strictEqual(offset, 0)
    })

  })



  // addDependency/getDependencies

  describe('addDependency()/getDependencies()', function() {

    it('seems to add dependency', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      const block1 = new SttBlock(builder)
      builder.addDependency(block1)
    })

    it('returns an array', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      const block1 = new SttBlock(builder)
      builder.addDependency(block1)
      const dependencies = builder.getDependencies()
      equal(Array.isArray(dependencies), true)
    })

    it('returns an array of 1 element', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      const block1 = new SttBlock(builder)
      builder.addDependency(block1)
      const dependencies = builder.getDependencies()
      strictEqual(dependencies.length, 1)
    })

    it('returns the dependency', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      const block1 = new SttBlock(builder)
      builder.addDependency(block1)
      const dependencies = builder.getDependencies()
      equal(dependencies[0] instanceof SttBlock, true)
    })

    it('returns no dependency', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      const dependencies = builder.getDependencies()
      strictEqual(dependencies.length, 0)
    })

  })



  // build

  describe('build()', function() {

    it('seems to build the block', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      builder.build()
    })

    it('builds a block', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      const block = builder.build()
      equal(block instanceof SttBlock, true)
    })

    it('builds a block with name', function() {
      const builder = new SttBlockBuilder(fileinfo1)
      builder.setName('name 1')
      const block = builder.build()
      const name = block.getName()
      strictEqual(name, 'name 1')
    })

  })


})
