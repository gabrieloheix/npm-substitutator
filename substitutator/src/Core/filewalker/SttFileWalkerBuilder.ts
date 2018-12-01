//
//  SttFileWalkerBuilder.ts
//
//  Builder for SttFileWalker class
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

import { SttContextProvider } from '../SttContextProvider'
import { SttBlockProvider } from '../SttBlockProvider'

import { SttCompendium } from '../compendium/SttCompendium'
import { SttFileWalker } from './SttFileWalker'


export class SttFileWalkerBuilder {

  private contextProvider: SttContextProvider
  private blockProvider: SttBlockProvider
  private compendium: SttCompendium
  private path: string


  constructor(compendium: SttCompendium,
      contextProvider: SttContextProvider, blockProvider: SttBlockProvider) {
    this.contextProvider = contextProvider
    this.blockProvider = blockProvider
    this.compendium = compendium
    this.path = ''
  }


  getContextProvider(): SttContextProvider {
    return this.contextProvider
  }

  getBlockProvider(): SttBlockProvider {
    return this.blockProvider
  }

  getCompendium(): SttCompendium {
    return this.compendium
  }

  setPath(path: string): SttFileWalkerBuilder {
    this.path = path
    return this
  }

  getPath(): string {
    return this.path
  }

  build(): SttFileWalker {
    return new SttFileWalker(this)
  }

}
