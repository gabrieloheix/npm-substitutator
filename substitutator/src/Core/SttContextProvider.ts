//
//  SttContextProvider.ts
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

import { SttContext } from './context/SttContext'
import { SttContextBuilder } from './context/SttContextBuilder'


export class SttContextProvider {


  constructor() {
  }


  newDefaultContext(): SttContext {
    const contextBuilder = new SttContextBuilder()
    return contextBuilder
      .setBlockName(false)
      .build()
  }

}
