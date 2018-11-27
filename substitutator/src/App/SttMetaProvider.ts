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
//  Last Modified: November 2018
//

import { SttFileInfoProvider } from '../Util'
import { SttOptionsProvider, SttBlockProvider, SttCompendiumProvider, SttContextProvider, SttFileWalkerProvider } from '../Core'


export class SttMetaProvider {

  
  constructor() {
  }


  newFileInfoProvider(): SttFileInfoProvider {
    return new SttFileInfoProvider()
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

  newFileWalkerProvider(contextProvider: SttContextProvider): SttFileWalkerProvider {
    return new SttFileWalkerProvider(contextProvider)
  }

}
