
const { equal, strictEqual, notEqual, doesNotThrow } = require('assert')

const { SttFileReader } = require('../dist/Util')


describe('1041-filereader', function() {


  // class

  describe('SttFileReader class', function() {

    it('can be instantiated', function() {
      const fr = new SttFileReader('test/examples/lorem.txt')
      notEqual(fr, null)
    })

  })



  // load

  describe('load()', function() {

    it('loads file content', function() {
      doesNotThrow(function() {
        const fr = new SttFileReader('test/examples/lorem.txt')
        const loaded = fr.load()
        strictEqual(loaded, true)
      }, /load\(\) cannot load file content without raising an exception/);
    })

  })



  // advance

  describe('advance()', function() {

    it('seems to advance inside the file', function() {
      doesNotThrow(function() {
        const fr = new SttFileReader('test/examples/lorem.txt')
        fr.load()
        fr.advance()
      }, /doesNotThrow\(\) does not run without raising an exception/);
    })

    it.skip('advance at the end of the file throws an error', function() {
    })

  })



  // hasMore

  describe('hasMore()', function() {

    it('seems to check file has more characters to read', function() {
      doesNotThrow(function() {
        const fr = new SttFileReader('test/examples/lorem.txt')
        fr.load()
        fr.hasMore()
      }, /hasMore\(\) does not run without raising an exception/);
    })

    it('returns true when reading first character', function() {
      const fr = new SttFileReader('test/examples/single.txt')
      fr.load()
      const has = fr.hasMore()
      strictEqual(has, true)
    })

    it('returns false when end of file is reached', function() {
      const fr = new SttFileReader('test/examples/single.txt')
      fr.load()
      fr.advance()
      const has = fr.hasMore()
      strictEqual(has, false)
    })

    it('returns false when file is empty', function() {
      const fr = new SttFileReader('test/examples/empty.txt')
      fr.load()
      const has = fr.hasMore()
      strictEqual(has, false)
    })

  })



  // getCharacter

  describe('getCharacter()', function() {

    it('seems to return the next character', function() {
      doesNotThrow(function() {
        const fr = new SttFileReader('test/examples/lorem.txt')
        fr.load()
        fr.getCharacter()
      }, /getCharacter\(\) does not run without raising an exception/);
    })

    it('returns the first character', function() {
      const fr = new SttFileReader('test/examples/lorem.txt')
      fr.load()
      const character = fr.getCharacter()
      strictEqual(character, 'L')
    })

    it('returns the second character', function() {
      const fr = new SttFileReader('test/examples/lorem.txt')
      fr.load()
      fr.advance()
      const character = fr.getCharacter()
      strictEqual(character, 'o')
    })

    it('returns the last character', function() {
      const fr = new SttFileReader('test/examples/lorem.txt')
      fr.load()
      let character;
      while (fr.hasMore()) {
        character = fr.getCharacter()
        fr.advance()
      }
      strictEqual(character, '.')
    })

  })


})
