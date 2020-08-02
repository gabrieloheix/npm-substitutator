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
//  Last Modified: July 2020
//

import { SttFileReaderProvider } from '../../Util'
import { SttFileInfo } from '../../Util'

import { SttContextProvider } from '../SttContextProvider'
import { SttBlockProvider } from '../SttBlockProvider'

import { SttCompendium } from '../compendium/SttCompendium'
import { SttFileWalker } from './SttFileWalker'


export class SttFileWalkerBuilder {

  private fileReaderProvider: SttFileReaderProvider
  private contextProvider: SttContextProvider
  private blockProvider: SttBlockProvider
  private compendium: SttCompendium
  private fileInfo: SttFileInfo[]  // to not have to init it


  constructor(compendium: SttCompendium, fileReaderProvider: SttFileReaderProvider,
      contextProvider: SttContextProvider, blockProvider: SttBlockProvider) {
    this.fileReaderProvider = fileReaderProvider
    this.contextProvider = contextProvider
    this.blockProvider = blockProvider
    this.compendium = compendium
    this.fileInfo = []
  }


  getFileReaderProvider(): SttFileReaderProvider {
    return this.fileReaderProvider
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

  setFileInfo(fileInfo: SttFileInfo): SttFileWalkerBuilder {
    this.fileInfo[0] = fileInfo
    return this
  }

  getFileInfo(): SttFileInfo {
    return this.fileInfo[0]
  }

  build(): SttFileWalker {
    return new SttFileWalker(this)
  }

}
