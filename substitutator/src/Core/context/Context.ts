//
//  Context.ts
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

import { ContextBuilder } from './ContextBuilder'


export class Context {

  isBlockName: boolean

  constructor(builder: ContextBuilder) {
    this.isBlockName = builder.getIsBlockName();
  }

}
