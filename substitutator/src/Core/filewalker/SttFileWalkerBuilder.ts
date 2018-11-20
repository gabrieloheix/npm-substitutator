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

import { ContextService } from '../context/ContextService'

import { SttFileWalker } from './SttFileWalker'


export class SttFileWalkerBuilder {

  contextService: ContextService
  path: string


  constructor(contextService: ContextService) {
    this.contextService = contextService
    this.path = '';
  }


  //setContextService(contextService: ContextService): SttFileWalkerBuilder {
  //  this.contextService = contextService;
  //  return this;
  //}

  getContextService(): ContextService {
    return this.contextService;
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
