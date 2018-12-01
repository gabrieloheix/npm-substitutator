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
import { SttBlockProvider } from './SttBlockProvider'

import { SttCompendium } from './compendium/SttCompendium'
import { SttFileWalker } from './filewalker/SttFileWalker'
import { SttFileWalkerBuilder } from './filewalker/SttFileWalkerBuilder'


export class SttFileWalkerProvider {

  private contextProvider: SttContextProvider
  private blockProvider: SttBlockProvider
  private compendium: SttCompendium


  constructor(compendium: SttCompendium,
      contextProvider: SttContextProvider, blockProvider: SttBlockProvider) {
    this.contextProvider = contextProvider
    this.blockProvider = blockProvider
    this.compendium = compendium
  }


  newFileWalker(fileName: string): SttFileWalker {
    const fileWalkerBuilder = new SttFileWalkerBuilder(this.compendium,
        this.contextProvider, this.blockProvider)
    return fileWalkerBuilder
      .setPath(fileName)
      .build()
  }

}
