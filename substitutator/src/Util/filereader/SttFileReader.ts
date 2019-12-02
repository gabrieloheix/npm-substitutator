//
//  SttFileReader.ts
//
//  Wrapper for reading file in Node.js
//
//
//  Substitutator
//
//  Author: Gabriel Oheix
//  License: GPL v3
//
//  Creation Date: December 2019
//  Last Modified: December 2019
//


export class SttFileReader {

  path: string


  constructor(path: string) {
    this.path = path
  }


  hasMore(): boolean {

    // todo

    return true
  }

  getNextCharacter(): string {

    // todo

    return '@'
  }

  //createReadStream
  //https://nodejs.org/en/knowledge/advanced/streams/how-to-use-fs-create-read-stream/

}
