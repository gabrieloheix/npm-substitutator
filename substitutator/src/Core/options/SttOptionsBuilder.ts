//
//  SttOptionsBuilder.ts
//
//  Builder for SttOptions class
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

import { SttOptions } from './SttOptions'


export class SttOptionsBuilder {

  option1: number
  private verbose: boolean


  constructor() {
    this.option1 = 0
    this.verbose = false
  }


  setOption1(option1: number): SttOptionsBuilder {
    this.option1 = option1
    return this
  }

  getOption1(): number {
    return this.option1
  }

  setVerbose(verbose: boolean): SttOptionsBuilder {
    this.verbose = verbose
    return this
  }

  getVerbose(): boolean {
    return this.verbose
  }

  build(): SttOptions {
    return new SttOptions(this)
  }

}
