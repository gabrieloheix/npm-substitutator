//
//  SttContext.ts
//
//  Context to use while parsing files
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

import { SttContextBuilder } from './SttContextBuilder'


export class SttContext {

  private blockName: boolean


  constructor(builder: SttContextBuilder) {
    this.blockName = builder.getBlockName()
  }


  f(): string {
    return 'f'
  }

  isBlockName(): boolean {
    return this.blockName
  }

}
