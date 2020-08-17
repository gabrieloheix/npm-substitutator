
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

    it('seems to add several characters', function() {
      const sb = new SttStringBuilder()
      sb.append('t')
      sb.append('h')
      sb.append('i')
      sb.append('s')
      sb.append(' ')
      sb.append('i')
      sb.append('s')
      sb.append(' ')
      sb.append('a')
      sb.append(' ')
      sb.append('s')
      sb.append('t')
      sb.append('r')
      sb.append('i')
      sb.append('n')
      sb.append('g')
    })

    it('seems to add 107 strings', function() {
      const sb = new SttStringBuilder()
      for (let i = 0; i < 107; i++) {
        sb.append('a string ')
      }
    })

    it('seems to add 1029 characters', function() {
      const sb = new SttStringBuilder()
      for (let i = 0; i < 1029; i++) {
        sb.append('x')
      }
    })

  })



  // getLast

  describe('getLast()', function() {

    it('get the last 0 characters', function() {
      const sb = new SttStringBuilder()
      sb.append('this is a string')
      const last = sb.getLast(0)
      strictEqual(last, '')
    })

    it('get the last 4 characters', function() {
      const sb = new SttStringBuilder()
      sb.append('t')
      sb.append('h')
      sb.append('i')
      sb.append('s')
      sb.append(' ')
      sb.append('i')
      sb.append('s')
      sb.append(' ')
      sb.append('a')
      sb.append(' ')
      sb.append('s')
      sb.append('t')
      sb.append('r')
      sb.append('i')
      sb.append('n')
      sb.append('g')
      const last = sb.getLast(4)
      strictEqual(last, 'ring')
    })

    it('get the last 4 characters of a single string', function() {
      const sb = new SttStringBuilder()
      sb.append('this is a string')
      const last = sb.getLast(4)
      strictEqual(last, 'ring')
    })

    it('get the last 4 characters of a several strings', function() {
      const sb = new SttStringBuilder()
      sb.append('this ')
      sb.append('is ')
      sb.append('a ')
      sb.append('string')
      const last = sb.getLast(4)
      strictEqual(last, 'ring')
    })

    it('get the last 4 characters of a string of 103', function() {
      const sb = new SttStringBuilder()
      for (let i = 0; i < 91; i++) {
        sb.append('x')
      }
      sb.append(' ')
      sb.append('L')
      sb.append('o')
      sb.append('r')
      sb.append('e')
      sb.append('m')
      sb.append(' ')
      sb.append('i')
      sb.append('p')
      sb.append('s')
      sb.append('u')
      sb.append('m')
      const last = sb.getLast(4)
      strictEqual(last, 'psum')
    })

    it('get the last 4 characters of a string of 103 single string', function() {
      const sb = new SttStringBuilder()
      sb.append('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et')
      const last = sb.getLast(4)
      strictEqual(last, 'e et')
    })

    it('get the last 4 characters of a string of 801', function() {
      const sb = new SttStringBuilder()
      for (let i = 0; i < 796; i++) {
        sb.append('x')
      }
      sb.append('L')
      sb.append('o')
      sb.append('r')
      sb.append('e')
      sb.append('m')
      const last = sb.getLast(4)
      strictEqual(last, 'orem')
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
