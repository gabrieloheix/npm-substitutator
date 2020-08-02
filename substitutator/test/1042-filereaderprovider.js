
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttFileReader } = require('../dist/Util/filereader/SttFileReader')
const { SttFileReaderProvider } = require('../dist/Util/SttFileReaderProvider')


describe('1042-filereaderprovider', function() {


  // class

  describe('SttFileReaderProvider class', function() {

    it('can be instantiated', function() {
      const provider1 = new SttFileReaderProvider()
      notEqual(provider1, null)
    })

  })



  // newSttFileReader

  describe('newSttFileReader()', function() {

    it('seems to return a new file reader', function() {
      const provider1 = new SttFileReaderProvider()
      const filereader1 = provider1.newSttFileReader('/path/')
    })

    it('returns a new file reader', function() {
      const provider1 = new SttFileReaderProvider()
      const filereader1 = provider1.newSttFileReader('/path/')
      equal(filereader1 instanceof SttFileReader, true)
    })

    it('returns a new file reader that has more', function() {
      const provider1 = new SttFileReaderProvider()
      const filereader1 = provider1.newSttFileReader('test/examples/single.txt')
      filereader1.load()
      const has = filereader1.hasMore()
      strictEqual(has, true)
    })

  })


})
