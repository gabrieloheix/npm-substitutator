//
//  SttBlockBuilder.ts
//
//  Builder for SttBlock class
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

import { SttBlock } from './SttBlock'


export class SttBlockBuilder {

  private name: string
  private file: SttFileInfo
  private offsetBegin: number
  private offsetEnd: number
  private dependencies: SttBlock[]


  constructor(file: SttFileInfo) {
    this.file = file
    this.name = ''
    this.offsetBegin = 0
    this.offsetEnd = 0
    this.dependencies = []
  }


  getFileInfo(): SttFileInfo {
    return this.file
  }

  setName(name: string): SttBlockBuilder {
    this.name = name
    return this
  }

  getName(): string {
    return this.name
  }

  setOffsetBegin(offsetBegin: number): SttBlockBuilder {
    this.offsetBegin = offsetBegin
    return this
  }

  getOffsetBegin(): number {
    return this.offsetBegin
  }

  setOffsetEnd(offsetEnd: number): SttBlockBuilder {
    this.offsetEnd = offsetEnd
    return this
  }

  getOffsetEnd(): number {
    return this.offsetEnd
  }

  addDependency(dependency: SttBlock): SttBlockBuilder {
    this.dependencies.push(dependency)
    return this
  }

  getDependencies(): SttBlock[] {
    return this.dependencies
  }

  build(): SttBlock {
    return new SttBlock(this)
  }

}
