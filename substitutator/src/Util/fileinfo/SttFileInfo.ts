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
//  Last Modified: November 2018
//

//import { SttFileWalkerBuilder } from './SttFileWalkerBuilder'


export class SttFileInfo {

  path: string


  constructor(path: string) {
    this.path = path
  }


  c(): string {
    return 'c'
  }

}
