//
//  SttBlockBuilder.ts
//
//  Builder for SttBlock class
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

import { SttBlock } from './SttBlock'


export class SttBlockBuilder {

  private name: string
  //fileinfo
  //offset
  //end
  //dependencies


  constructor() {
    this.name = ''
  }


  setName(name: string): SttBlockBuilder {
    this.name = name
    return this
  }

  getName(): string {
    return this.name
  }

  build(): SttBlock {
    return new SttBlock(this)
  }

}
