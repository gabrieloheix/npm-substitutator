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

  isBlockName: boolean


  constructor(builder: SttContextBuilder) {
    this.isBlockName = builder.getIsBlockName()
  }


  f(): string {
    return 'f'
  }

}
