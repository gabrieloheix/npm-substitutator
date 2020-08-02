//
//  SttFileInfo.ts
//
//  Gathering file information to ease file use
//
//
//  Substitutator
//
//  Author: Gabriel Oheix
//  License: GPL v3
//
//  Creation Date: November 2018
//  Last Modified: July 2020
//


export class SttFileInfo {

  path: string


  constructor(path: string) {
    this.path = path
  }


  c(): string {
    return 'c'
  }

  getPath(): string {
    return this.path
  }

}
