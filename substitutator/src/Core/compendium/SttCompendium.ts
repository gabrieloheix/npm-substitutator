//
//  SttCompendium.ts
//
//  Compendium to store all blocks information
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

import { SttBlock } from '../block/SttBlock'


export class SttCompendium {

  private blocks: SttBlock[]


  constructor() {
    this.blocks = []
  }


  e(): string {
    return 'e'
  }


  blockExists(name: string, filepath: string): boolean {
    return false
  }

  addBlock(name: string, filepath: string, block: SttBlock): void {
    this.blocks.push(block)
  }

  getBlock(name: string, filepath: string): SttBlock {
    //throw 'rdcdh'
    return this.blocks[0]
  }

}
