//
//  SttContextBuilder.ts
//
//  Builder for SttContext class
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

import { SttContext } from './SttContext'


export class SttContextBuilder {

  isBlockName: boolean


  constructor() {
    this.isBlockName = false
  }


  setIsBlockName(isBlockName: boolean): SttContextBuilder {
    this.isBlockName = isBlockName
    return this
  }

  getIsBlockName(): boolean {
    return this.isBlockName
  }

  build(): SttContext {
    return new SttContext(this)
  }

}
