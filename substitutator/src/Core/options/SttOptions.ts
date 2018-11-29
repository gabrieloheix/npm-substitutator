//
//  SttOptions.ts
//
//  Options to be passed to the Program
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

import { SttOptionsBuilder } from './SttOptionsBuilder'


export class SttOptions {

  option1: number
  private verbose: boolean


  constructor(builder: SttOptionsBuilder) {
    this.option1 = builder.getOption1()
    this.verbose = builder.getVerbose()
  }


  d(): string {
    return 'd'
  }

  isVerbose(): boolean {
    return this.verbose
  }

}
