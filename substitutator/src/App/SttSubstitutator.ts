//
//  SttSubstitutator.ts
//
//  Main program
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

import { SttMetaProvider } from './SttMetaProvider'


export class SttSubstitutator {

  metaProvider: SttMetaProvider

  
  constructor(metaProvider: SttMetaProvider) {
    this.metaProvider = metaProvider
  }


  b(): string {
    return 'b'
  }

  dummy(): string {
    let _ = ''

    const fiProvider = this.metaProvider.newFileInfoProvider()
    const fi = fiProvider.newSttFileInfo('')
    _ += fi.c()

    _ += '_'

    const compendiumProvider = this.metaProvider.newCompendiumProvider()
    const compendium = compendiumProvider.newCompendium()
    _ += compendium.e()

    const contextProvider = this.metaProvider.newContextProvider()
    const context = contextProvider.newDefaultContext()
    _ += context.f()

    const fwProvider = this.metaProvider.newFileWalkerProvider(contextProvider)
    const fw = fwProvider.newFileWalker('')
    _ += fw.g()

    return _
  }

}
