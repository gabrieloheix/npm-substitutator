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


  constructor(builder: SttOptionsBuilder) {
    this.option1 = builder.getOption1()
  }


  d(): string {
    return 'd'
  }

}
