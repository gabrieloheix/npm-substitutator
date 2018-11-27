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

import { SttBlock } from './block/SttBlock'
import { SttBlockBuilder } from './block/SttBlockBuilder'


export class SttBlockProvider {


  constructor() {
  }


  newBlock(name: string): SttBlock {
    const blockBuilder = new SttBlockBuilder()
    return blockBuilder
      .setName(name)
      .build()
  }

}
