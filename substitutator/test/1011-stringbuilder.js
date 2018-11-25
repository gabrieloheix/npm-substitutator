
const { equal, strictEqual, notEqual, throws } = require('assert')

const { SttStringBuilder } = require('../dist/Util')


describe('1011-stringbuilder', function() {


  // class

  describe('SttStringBuilder class', function() {

    it('can be instantiated', function() {
      const sb = new SttStringBuilder()
      notEqual(sb, null)
    })

  })



  // append

  describe('append()', function() {

    it('seems to add the string', function() {
      const sb = new SttStringBuilder()
      sb.append('the string')
    })

    it('seems to add the character', function() {
      const sb = new SttStringBuilder()
      sb.append('t')
    })

  })



  // toString

  describe('toString()', function() {

    it('builds the relevant string', function() {
      const sb = new SttStringBuilder()
      sb.append('the string')
      const s = sb.toString()
      strictEqual(s, 'the string')
    })

    it('builds a string with 1 character', function() {
      const sb = new SttStringBuilder()
      sb.append('t')
      const s = sb.toString()
      strictEqual(s, 't')
    })

    it('builds an empty string', function() {
      const sb = new SttStringBuilder()
      sb.append('')
      const s = sb.toString()
      strictEqual(s, '')
    })

    it('builds the relevant string from 2 parts', function() {
      const sb = new SttStringBuilder()
      sb.append('the')
      sb.append(' string')
      const s = sb.toString()
      strictEqual(s, 'the string')
    })

    it('builds the relevant string from 101 parts', function() {
      const sb = new SttStringBuilder()
      for (let i = 0; i < 101; i++) {
        sb.append('the string ')
      }
      const s = sb.toString()
      strictEqual(s, 'the string '.repeat(101))
    })

    it('builds the relevant string from 1001 parts', function() {
      const sb = new SttStringBuilder()
      for (let i = 0; i < 1001; i++) {
        sb.append('the string ')
      }
      const s = sb.toString()
      strictEqual(s, 'the string '.repeat(1001))
    })

  })


})
