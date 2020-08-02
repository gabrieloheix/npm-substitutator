//
//  SttFileWalkerProvider.ts
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

import { SttFileReaderProvider } from '../Util'
import { SttFileInfoProvider } from '../Util'

import { SttContextProvider } from './SttContextProvider'
import { SttBlockProvider } from './SttBlockProvider'

import { SttCompendium } from './compendium/SttCompendium'
import { SttFileWalker } from './filewalker/SttFileWalker'
import { SttFileWalkerBuilder } from './filewalker/SttFileWalkerBuilder'


export class SttFileWalkerProvider {

  private fileReaderProvider: SttFileReaderProvider
  private fileInfoProvider: SttFileInfoProvider
  private contextProvider: SttContextProvider
  private blockProvider: SttBlockProvider
  private compendium: SttCompendium


  constructor(compendium: SttCompendium,
        fileReaderProvider: SttFileReaderProvider, fileInfoProvider: SttFileInfoProvider,
        contextProvider: SttContextProvider, blockProvider: SttBlockProvider) {
    this.fileReaderProvider = fileReaderProvider
    this.fileInfoProvider = fileInfoProvider
    this.contextProvider = contextProvider
    this.blockProvider = blockProvider
    this.compendium = compendium
  }


  newFileWalker(filePath: string): SttFileWalker {
    const fileInfo = this.fileInfoProvider.newSttFileInfo(filePath)

    const fileWalkerBuilder = new SttFileWalkerBuilder(this.compendium,
          this.fileReaderProvider, this.contextProvider, this.blockProvider)
    return fileWalkerBuilder
      .setFileInfo(fileInfo)
      .build()
  }

}
