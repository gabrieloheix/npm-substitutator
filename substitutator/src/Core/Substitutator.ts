//
//  Substitutator.ts
//
//  Main program
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

import { Options } from './objects/Options'

    import * as fs from 'fs'

export class Substitutator {

  options: Options

  constructor(options: Options) {
    this.options = options
  }

  substitute(): void {

    // read files

    // build dependency tree

    // write oûtput files

    this.temp()

  }

  temp(): void {

    const content1 = fs.readFileSync('./example1.txt', 'utf8')
    //console.log("content1: ", content1)

    const content2 = fs.readFileSync('./example2.txt', 'utf8')
    //console.log("content2: ", content2)

    const offset = content1.indexOf('fichier');
    console.log("offset: ", offset)

    // build dependency tree

    // write oûtput files

  }

}
