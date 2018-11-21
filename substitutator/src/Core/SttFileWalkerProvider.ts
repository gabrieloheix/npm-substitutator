//
//  SttFileWalkerService.ts
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

import { SttContextProvider } from './SttContextProvider'

import { SttFileWalker } from './filewalker/SttFileWalker'
import { SttFileWalkerBuilder } from './filewalker/SttFileWalkerBuilder'


export class SttFileWalkerProvider {

  contextProvider: SttContextProvider


  constructor(contextProvider: SttContextProvider) {
    this.contextProvider = contextProvider
  }


  newFileWalker(fileName: string): SttFileWalker {
    const fileWalkerBuilder = new SttFileWalkerBuilder(this.contextProvider)
    return fileWalkerBuilder
      .setPath(fileName)
      .build()
  }

}
