//
//  SttBlock.ts
//
//  Block containing information about a file block
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

import { SttBlockBuilder } from './SttBlockBuilder'


export class SttBlock {

  private name: string
  //fileinfo
  //offset
  //end
  //dependencies


  constructor(builder: SttBlockBuilder) {
    this.name = builder.getName()
  }


  h(): string {
    return 'h'
  }

  xxx(xxx: string): void {
  }

  getName(): string {
    return this.name
  }

}
