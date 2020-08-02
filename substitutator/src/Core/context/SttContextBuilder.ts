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
//  Last Modified: July 2020
//

import { SttStringBuilder } from '../../Util'

import { SttContext } from './SttContext'


export class SttContextBuilder {

  private parent: SttContext[]
  private namingPhase: boolean
  private aggregated: SttStringBuilder
  private offset: number


  constructor() {
    this.parent = []
    this.namingPhase = false
    this.aggregated = new SttStringBuilder()
    this.offset = 0
  }


  setParentContext(parent: SttContext): SttContextBuilder {
    this.parent[0] = parent
    return this
  }

  getParentContextArray(): SttContext[] {
    return this.parent
  }

  setNamingPhase(namingPhase: boolean): SttContextBuilder {
    this.namingPhase = namingPhase
    return this
  }

  getNamingPhase(): boolean {
    return this.namingPhase
  }

  setAggregated(aggregated: SttStringBuilder): SttContextBuilder {
    this.aggregated = aggregated
    return this
  }

  getAggregated(): SttStringBuilder {
    return this.aggregated
  }

  setOffset(offset: number): SttContextBuilder {
    this.offset = offset
    return this
  }

  getOffset(): number {
    return this.offset
  }

  build(): SttContext {
    return new SttContext(this)
  }

}
