
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttFileReader } = require('../dist/Util')


describe('1041-filereader', function() {


  // class

  describe('SttFileReader class', function() {

    it('can be instantiated', function() {
      const fr = new SttFileReader('/path/')
      notEqual(fr, null)
    })

  })


})
