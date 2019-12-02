
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttFileInfo } = require('../dist/Util/fileinfo/SttFileInfo')
const { SttFileInfoProvider } = require('../dist/Util/SttFileInfoProvider')


describe('1022-fileinfoprovider', function() {


  // class

  describe('SttFileInfoProvider class', function() {

    it('can be instantiated', function() {
      const provider1 = new SttFileInfoProvider()
      notEqual(provider1, null)
    })

  })



  // newSttFileInfo

  describe('newSttFileInfo()', function() {

    it('seems to return a new file info', function() {
      const provider1 = new SttFileInfoProvider()
      const fileinfo1 = provider1.newSttFileInfo('/path/')
    })

    it('returns a new file info', function() {
      const provider1 = new SttFileInfoProvider()
      const fileinfo1 = provider1.newSttFileInfo('/path/')
      equal(fileinfo1 instanceof SttFileInfo, true)
    })

    it.skip('returns a new file info with path', function() {
    })

  })


})
