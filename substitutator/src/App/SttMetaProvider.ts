//
//  SttMetaProvider.ts
//
//  Main Provider of Providers
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

import { SttFileInfoProvider,
         SttFileReaderProvider } from '../Util'
import { SttOptionsProvider,
         SttBlockProvider,
         SttCompendiumProvider,
         SttContextProvider,
         SttFileWalkerProvider,
         SttCompendium } from '../Core'


export class SttMetaProvider {

  
  constructor() {
  }


  newFileInfoProvider(): SttFileInfoProvider {
    return new SttFileInfoProvider()
  }

  newFileReaderProvider(): SttFileReaderProvider {
    return new SttFileReaderProvider()
  }

  newOptionsProvider(): SttOptionsProvider {
    return new SttOptionsProvider()
  }

  newBlockProvider(): SttBlockProvider {
    return new SttBlockProvider()
  }

  newCompendiumProvider(): SttCompendiumProvider {
    return new SttCompendiumProvider()
  }

  newContextProvider(): SttContextProvider {
    return new SttContextProvider()
  }

  newFileWalkerProvider(
        compendium: SttCompendium,
        fileReaderProvider: SttFileReaderProvider,
        fileInfoProvider: SttFileInfoProvider,
        contextProvider: SttContextProvider,
        blockProvider: SttBlockProvider
  ): SttFileWalkerProvider {
    return new SttFileWalkerProvider(compendium,
          fileReaderProvider, fileInfoProvider, contextProvider, blockProvider)
  }

}
