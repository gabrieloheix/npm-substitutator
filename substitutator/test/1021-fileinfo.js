
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttFileInfo } = require('../dist/Util')


describe('1021-fileinfo', function() {


  // class

  describe('SttFileInfo class', function() {

    it('can be instantiated', function() {
      const fi = new SttFileInfo('path1')
      notEqual(fi, null)
    })

  })


})
