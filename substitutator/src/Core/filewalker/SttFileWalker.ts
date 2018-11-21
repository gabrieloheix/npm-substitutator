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

import { SttFileWalkerBuilder } from './SttFileWalkerBuilder'


export class SttFileWalker {

  contextProvider: SttContextProvider
  path: string


  constructor(builder: SttFileWalkerBuilder) {
  	this.contextProvider = builder.getContextProvider()
    this.path = builder.getPath()
  }


  g(): string {
    return 'g'
  }

}
