//
//  ContextBuilder.ts
//
//  Builder for Context class
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

import { Context } from './Context'


export class ContextBuilder {

  isBlockName: boolean


  constructor() {
    this.isBlockName = false;
  }


  setIsBlockName(isBlockName: boolean): ContextBuilder {
    this.isBlockName = isBlockName;
    return this;
  }

  getIsBlockName(): boolean {
    return this.isBlockName;
  }

  build(): Context {
    return new Context(this);
  }

}
