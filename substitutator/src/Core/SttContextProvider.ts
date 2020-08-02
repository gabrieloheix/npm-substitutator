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
//  Last Modified: July 2020
//

import { SttStringBuilder } from '../Util'

import { SttContext } from './context/SttContext'
import { SttContextBuilder } from './context/SttContextBuilder'


export class SttContextProvider {


  constructor() {
  }


  newFileRootContext(filepath: string): SttContext {
    const stringBuilder = new SttStringBuilder()
    stringBuilder.append(filepath)

    const contextBuilder = new SttContextBuilder()
    return contextBuilder
      .setAggregated(stringBuilder)
      .build()
  }

  newBlockNameContext(parent: SttContext): SttContext {
    const contextBuilder = new SttContextBuilder()
    return contextBuilder
      .setParentContext(parent)
      .setNamingPhase(true)
      .build()
  }

  newBlockDefinitionContext(parent: SttContext, offset: number): SttContext {
    const contextBuilder = new SttContextBuilder()
    return contextBuilder
      .setParentContext(parent)
      .setOffset(offset)
      .build()
  }

}
