
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttContext } = require('../dist/Core/context/SttContext')
const { SttContextBuilder } = require('../dist/Core/context/SttContextBuilder')


describe('2042-context', function() {

  const builder1 = (new SttContextBuilder()).setBlockName(true)


  // class

  describe('SttContext class', function() {

    it('can be instantiated', function() {
      const context1 = new SttContext(builder1)
      notEqual(context1, null)
    })

  })



  // isBlockName

  describe('isBlockName()', function() {

    it('returns is block name true', function() {
      const context1 = new SttContext(builder1)
      const is = context1.isBlockName()
      strictEqual(is, true)
    })

    it('returns default is block name', function() {
      const builder2 = new SttContextBuilder()
      const context1 = new SttContext(builder2)
      const name = context1.isBlockName()
      strictEqual(name, false)
    })

  })


})
