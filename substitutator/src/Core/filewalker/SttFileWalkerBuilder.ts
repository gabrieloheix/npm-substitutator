//
//  SttFileWalkerBuilder.ts
//
//  Builder for SttFileWalker class
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

import { SttFileWalker } from './SttFileWalker'


export class SttFileWalkerBuilder {

  contextProvider: SttContextProvider
  path: string


  constructor(contextProvider: SttContextProvider) {
    this.contextProvider = contextProvider
    this.path = '';
  }


  getContextProvider(): SttContextProvider {
    return this.contextProvider;
  }

  setPath(path: string): SttFileWalkerBuilder {
    this.path = path;
    return this;
  }

  getPath(): string {
    return this.path;
  }

  build(): SttFileWalker {
    return new SttFileWalker(this);
  }

}
