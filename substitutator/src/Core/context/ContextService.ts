//
//  ContextService.ts
//
//  Provide Context instances
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

import { Context } from './Context'
import { ContextBuilder } from './ContextBuilder'


export class ContextService {


  constructor() {
  }


  newDefaultContext(): Context {
    const contextBuilder = new ContextBuilder()
    return contextBuilder
      .setIsBlockName(false)
      .build()
  }

}
