//
//  SttOptionsProvider.ts
//
//  Provide Options instances
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

import { SttOptions } from './options/SttOptions'
import { SttOptionsBuilder } from './options/SttOptionsBuilder'


export class SttOptionsProvider {


  constructor() {
  }


  parseOptions(optionsObj: any): SttOptions {
    const optionsBuilder = new SttOptionsBuilder()
    return optionsBuilder
      .setOption1(4)
      .build()
  }

}
