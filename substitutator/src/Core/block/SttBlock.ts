//
//  SttBlock.ts
//
//  Block containing information about a file block
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

import { SttFileInfo } from '../../Util'

import { SttBlockBuilder } from './SttBlockBuilder'


export class SttBlock {

  private name: string
  private file: SttFileInfo
  private offsetBegin: number
  private offsetEnd: number
  private dependencies: SttBlock[]


  constructor(builder: SttBlockBuilder) {
    this.file = builder.getFileInfo()
    this.name = builder.getName()
    this.offsetBegin = builder.getOffsetBegin()
    this.offsetEnd = builder.getOffsetEnd()
    this.dependencies = builder.getDependencies()
  }


  g(): string {
    return 'g'
  }

  getFileInfo(): SttFileInfo {
    return this.file
  }

  getName(): string {
    return this.name
  }

  getOffsetBegin(): number {
    return this.offsetBegin
  }

  getOffsetEnd(): number {
    return this.offsetEnd
  }

  getDependencies(): SttBlock[] {
    return this.dependencies
  }

}
