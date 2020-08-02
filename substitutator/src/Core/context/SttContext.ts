//
//  SttContext.ts
//
//  Context to use while parsing files
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

import { SttContextBuilder } from './SttContextBuilder'


export class SttContext {

  private parent: SttContext[]  // plural as would need initialisation in constructor otherwise
  private namingPhase: boolean
  private aggregated: SttStringBuilder
  private offset: number


  constructor(builder: SttContextBuilder) {
    this.parent = builder.getParentContextArray()
    this.namingPhase = builder.getNamingPhase()
    this.aggregated = builder.getAggregated()
    this.offset = builder.getOffset()
  }


  f(): string {
    return 'f'
  }

  getParentContext(): SttContext {
    // error - if array size is not at least 1
    return this.parent[0]
  }

  isNamingPhase(): boolean {
    return this.namingPhase
  }

  getAggregatedString(): string {
    return this.aggregated.toString()
  }

  feedAggregated(more: string): void {
    this.aggregated.append(more)
  }

  getOffset(): number {
    return this.offset
  }

  // opening string

  // closing string

  // separator string ?!?

  // (real) block name

}
