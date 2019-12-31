//
//  SttFileReader.ts
//
//  Wrapper for synchronously reading file in Node.js
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

import * as fs from 'fs'


export class SttFileReader {

  path: string
  content: string
  length: number
  offset: number


  constructor(path: string) {
    this.path = path
    this.content = ''
    this.length = 0
    this.offset = 0
  }


  // https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options

  load(): boolean {
    this.content = fs.readFileSync(this.path, 'utf8')
    this.length = this.content.length
    return true
  }

  hasMore(): boolean {
    if (this.offset >= this.length) {
      return false;
    }
    return true;
  }

  getNextCharacter(): string {
    return this.content[ this.offset++ ]
  }

}
