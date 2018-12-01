//
//  SttBlockProvider.ts
//
//  Provide a Block instance
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

import { SttFileInfo } from '../Util'

import { SttBlock } from './block/SttBlock'
import { SttBlockBuilder } from './block/SttBlockBuilder'


export class SttBlockProvider {


  constructor() {
  }


  newBlock(
      name: string,
      file: SttFileInfo,
      begin: number,
      end: number,
      dependencies: SttBlock[]
  ): SttBlock {
    const blockBuilder = new SttBlockBuilder(file)
    return blockBuilder
      .setName(name)
      .setOffsetBegin(begin)
      .setOffsetEnd(end)
      .addDependency(dependencies[0])
      .build()
  }

}
