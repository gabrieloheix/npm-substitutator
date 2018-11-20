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

import { ContextService } from '../context/ContextService'

import { SttFileWalkerBuilder } from './SttFileWalkerBuilder'


export class SttFileWalker {

  contextService: ContextService
  path: string


  constructor(builder: SttFileWalkerBuilder) {
  	this.contextService = builder.getContextService()
    this.path = builder.getPath()
  }

}
