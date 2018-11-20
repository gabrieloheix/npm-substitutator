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

import { ContextService } from '../context/ContextService'

import { SttFileWalker } from './SttFileWalker'
import { SttFileWalkerBuilder } from './SttFileWalkerBuilder'


export class SttFileWalkerService {

  contextService: ContextService


  constructor(contextService: ContextService) {
    this.contextService = contextService
  }


  newFileWalker(fileName: string): SttFileWalker {
    const fileWalkerBuilder = new SttFileWalkerBuilder(this.contextService)
    return fileWalkerBuilder
      .setPath(fileName)
      .build()
  }

}
