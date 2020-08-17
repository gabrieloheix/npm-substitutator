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
//  Last Modified: August 2020
//

import { SttFileInfo } from '../../Util'
import { SttFileReader } from '../../Util'
import { SttFileReaderProvider } from '../../Util'

import { SttContext } from '../context/SttContext'
import { SttContextProvider } from '../SttContextProvider'
import { SttBlockProvider } from '../SttBlockProvider'
import { SttCompendium } from '../compendium/SttCompendium'

import { SttFileWalkerBuilder } from './SttFileWalkerBuilder'


export class SttFileWalker {

  private fileReaderProvider: SttFileReaderProvider
  private contextProvider: SttContextProvider
  private blockProvider: SttBlockProvider
  private compendium: SttCompendium
  private fileInfo: SttFileInfo


  constructor(builder: SttFileWalkerBuilder) {
    this.fileReaderProvider = builder.getFileReaderProvider()
    this.contextProvider = builder.getContextProvider()
    this.blockProvider = builder.getBlockProvider()
    this.compendium = builder.getCompendium()
    this.fileInfo = builder.getFileInfo()
  }


  h(): string {
    return 'h'
  }

  // todo - add fileDoesExist

  walk(): boolean {
    // open file for reading
    const path = this.fileInfo.getPath()
    const reader = this.fileReaderProvider.newSttFileReader(path)
    reader.load()

    // get initial context
    let context = this.contextProvider.newFileRootContext(path)

    // process character per character
    while (reader.hasMore()) {
      reader.advance()
      const character = reader.getCharacter()
      const offset = reader.getOffset()
      context = this.step(character, offset, context)
    }

    return true
  }


  private step(character: string, offset: number, context: SttContext): SttContext {

    // currently reading block name
    if (context.isNamingPhase()) {

      // block naming phase ending
      if (character == '|') {
        return this.startDefinition(context, offset)
      }

      // ending of a block name
      if (character == ']') {
        return this.endName(context)
      }

      // keep piece of the block name
      context.feedAggregated(character)
      return context

    }

    // beginning of a block
    if (character == '[') {
      return this.beginName(context)
    }

    // ending of a block definition
    if (character == ']') {
      return this.finishDefinition(context, offset)
    }

    return context
  }

  private beginName(context: SttContext): SttContext {
    return this.contextProvider.newBlockNameContext(context)
  }

  private endName(context: SttContext): SttContext {

    // keep the reference to that block (somehow)?

    return context.getParentContext()
  }

  private startDefinition(context: SttContext, offset: number): SttContext {
    return this.contextProvider.newBlockDefinitionContext(context, offset)
  }

  private finishDefinition(context: SttContext, offset: number): SttContext {
    const parent = context.getParentContext()
    const grand = parent.getParentContext()

    const begin = context.getOffset()
    const end = offset
    const name = parent.getAggregatedString()
    const path = this.fileInfo.getPath()
console.log(name)
console.log("[", begin, ", ", end, "]")

    const block = this.blockProvider.newBlock(name, this.fileInfo, begin, end, [])
    this.compendium.addBlock(name, path, block)

    return grand
  }

}
