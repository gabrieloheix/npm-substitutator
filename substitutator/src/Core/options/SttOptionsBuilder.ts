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


  constructor() {
    this.option1 = 0
  }


  setOption1(option1: number): SttOptionsBuilder {
    this.option1 = option1
    return this
  }

  getOption1(): number {
    return this.option1
  }

  build(): SttOptions {
    return new SttOptions(this)
  }

}
