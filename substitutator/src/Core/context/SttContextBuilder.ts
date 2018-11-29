//
//  SttContextBuilder.ts
//
//  Builder for SttContext class
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

import { SttContext } from './SttContext'


export class SttContextBuilder {

  private blockName: boolean


  constructor() {
    this.blockName = false
  }


  setBlockName(blockName: boolean): SttContextBuilder {
    this.blockName = blockName
    return this
  }

  getBlockName(): boolean {
    return this.blockName
  }

  build(): SttContext {
    return new SttContext(this)
  }

}
