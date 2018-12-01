
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttFileInfo } = require('../dist/Util/fileinfo/SttFileInfo')

const { SttBlock } = require('../dist/Core/block/SttBlock')
const { SttBlockBuilder } = require('../dist/Core/block/SttBlockBuilder')


describe('2022-block', function() {

  const fileinfo1 = new SttFileInfo('path1')


  // class

  describe('SttBlock class', function() {

    it('can be instantiated', function() {
      const builder1 = new SttBlockBuilder(fileinfo1)
      builder1.setName('name 1')
      builder1.setOffsetBegin(400)
      builder1.setOffsetEnd(600)
      const block1 = new SttBlock(builder1)
      notEqual(block1, null)
    })

  })



  // getFileInfo

  describe('getFileInfo()', function() {

    it('returns a FileInfo', function() {
      const builder1 = new SttBlockBuilder(fileinfo1)
      builder1.setName('name 1')
      builder1.setOffsetBegin(400)
      builder1.setOffsetEnd(600)
      const block1 = new SttBlock(builder1)
      const info = block1.getFileInfo()
      equal(info instanceof SttFileInfo, true)
    })

    it('returns the correct FileInfo', function() {
      const builder1 = new SttBlockBuilder(fileinfo1)
      builder1.setName('name 1')
      builder1.setOffsetBegin(400)
      builder1.setOffsetEnd(600)
      const block1 = new SttBlock(builder1)
      const info = block1.getFileInfo()
      strictEqual(info, fileinfo1)
    })

  })




  // getName

  describe('getName()', function() {

    it('returns the name', function() {
      const builder1 = new SttBlockBuilder(fileinfo1)
      builder1.setName('name 1')
      builder1.setOffsetBegin(400)
      builder1.setOffsetEnd(600)
      const block1 = new SttBlock(builder1)
      const name = block1.getName()
      strictEqual(name, 'name 1')
    })

    it('returns an empty name', function() {
      const builder1 = new SttBlockBuilder(fileinfo1)
      builder1.setOffsetBegin(400)
      builder1.setOffsetEnd(600)
      const block1 = new SttBlock(builder1)
      const name = block1.getName()
      strictEqual(name, '')
    })

  })




  // getOffsetBegin

  describe('getOffsetBegin()', function() {

    it('returns the offset begin', function() {
      const builder1 = new SttBlockBuilder(fileinfo1)
      builder1.setName('name 1')
      builder1.setOffsetBegin(400)
      builder1.setOffsetEnd(600)
      const block1 = new SttBlock(builder1)
      const begin = block1.getOffsetBegin()
      strictEqual(begin, 400)
    })

    it('returns a zero offset begin', function() {
      const builder1 = new SttBlockBuilder(fileinfo1)
      builder1.setName('name 1')
      builder1.setOffsetEnd(600)
      const block1 = new SttBlock(builder1)
      const begin = block1.getOffsetBegin()
      strictEqual(begin, 0)
    })

  })




  // getOffsetEnd

  describe('getOffsetEnd()', function() {

    it('returns the offset  end', function() {
      const builder1 = new SttBlockBuilder(fileinfo1)
      builder1.setName('name 1')
      builder1.setOffsetBegin(400)
      builder1.setOffsetEnd(600)
      const block1 = new SttBlock(builder1)
      const end = block1.getOffsetEnd()
      strictEqual(end, 600)
    })

    it('returns a zero offset end', function() {
      const builder1 = new SttBlockBuilder(fileinfo1)
      builder1.setName('name 1')
      builder1.setOffsetBegin(400)
      const block1 = new SttBlock(builder1)
      const end = block1.getOffsetEnd()
      strictEqual(end, 0)
    })

  })




  // getDependencies

  describe('getDependencies()', function() {

    it('returns a dependencies array', function() {
      const builder1 = new SttBlockBuilder(fileinfo1)
      builder1.setName('name 1')
      builder1.setOffsetBegin(400)
      builder1.setOffsetEnd(600)
      const block1 = new SttBlock(builder1)
      const dependencies = block1.getDependencies()
      equal(Array.isArray(dependencies), true)
    })

    it('returns the dependencies with 1 element', function() {
      const builder1 = new SttBlockBuilder(fileinfo1)
      builder1.setName('name 1')
      builder1.setOffsetBegin(400)
      builder1.setOffsetEnd(600)
      const block1 = new SttBlock(builder1)

      const builder2 = new SttBlockBuilder(fileinfo1)
      builder2.setName('name 2')
      builder2.setOffsetBegin(8)
      builder2.setOffsetEnd(30)
      builder2.addDependency(block1)
      const block2 = new SttBlock(builder2)

      const dependencies = block2.getDependencies()
      strictEqual(dependencies.length, 1)
    })

    it('returns the dependencies with a block', function() {
      const builder1 = new SttBlockBuilder(fileinfo1)
      builder1.setName('name 1')
      builder1.setOffsetBegin(400)
      builder1.setOffsetEnd(600)
      const block1 = new SttBlock(builder1)

      const builder2 = new SttBlockBuilder(fileinfo1)
      builder2.setName('name 2')
      builder2.setOffsetBegin(8)
      builder2.setOffsetEnd(30)
      builder2.addDependency(block1)
      const block2 = new SttBlock(builder2)

      const dependencies = block2.getDependencies()
      equal(dependencies[0] instanceof SttBlock, true)
    })

    it('returns the dependencies with the relevant block', function() {
      const builder1 = new SttBlockBuilder(fileinfo1)
      builder1.setName('name 1')
      builder1.setOffsetBegin(400)
      builder1.setOffsetEnd(600)
      const block1 = new SttBlock(builder1)

      const builder2 = new SttBlockBuilder(fileinfo1)
      builder2.setName('name 2')
      builder2.setOffsetBegin(8)
      builder2.setOffsetEnd(30)
      builder2.addDependency(block1)
      const block2 = new SttBlock(builder2)

      const dependencies = block2.getDependencies()
      strictEqual(dependencies[0], block1)
    })

    it('returns no dependency', function() {
      const builder1 = new SttBlockBuilder(fileinfo1)
      builder1.setName('name 1')
      builder1.setOffsetBegin(400)
      builder1.setOffsetEnd(600)
      const block1 = new SttBlock(builder1)
      const dependencies = block1.getDependencies()
      strictEqual(dependencies.length, 0)
    })

  })


})
