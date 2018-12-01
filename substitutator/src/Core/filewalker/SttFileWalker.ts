//
//  SttFileWalker.ts
//
//  File Walker reading through file content
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

import { SttFileWalkerBuilder } from './SttFileWalkerBuilder'


export class SttFileWalker {

  private contextProvider: SttContextProvider
  private blockProvider: SttBlockProvider
  private compendium: SttCompendium
  private path: string


  constructor(builder: SttFileWalkerBuilder) {
    this.contextProvider = builder.getContextProvider()
    this.blockProvider = builder.getBlockProvider()
    this.compendium = builder.getCompendium()
    this.path = builder.getPath()
  }


  h(): string {
    return 'h'
  }

}
