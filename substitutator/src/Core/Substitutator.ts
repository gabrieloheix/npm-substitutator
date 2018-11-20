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


//import { Context } from './context/Context'
import { ContextService } from './context/ContextService'

import { SttFileWalkerService } from './filewalker/SttFileWalkerService'

import { SttCompendiumService } from './SttCompendiumService'


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

    this.justLoading()

  }

  temp(): void {

    const content1 = fs.readFileSync('./example1.txt', 'utf8')
    //console.log("content1: ", content1)

    const content2 = fs.readFileSync('./example2.txt', 'utf8')
    //console.log("content2: ", content2)

    const offset1 = content1.indexOf('[[[')
    //console.log("offset1: ", offset1)

    const offset2 = content2.indexOf('[[[')
    //console.log("offset2: ", offset2)

    const end1 = content1.indexOf(']]]')
    //console.log("end1: ", end1)

    const end2 = content2.indexOf(']]]')
    //console.log("end2: ", end2)

    const intermediate = content1.indexOf('|')
    //console.log("intermediate: ", intermediate)


    const tree: any = {}

    const content1a = content1.substring(0, offset1)
    const content1b = content1.substring(offset1 + 3, intermediate)
    const content1c = content1.substring(intermediate + 1, end1)
    const content1d = content1.substring(end1 + 3)

    const content2a = content2.substring(0, offset2)
    const content2b = content2.substring(offset2 + 3, end2)
    const content2c = content2.substring(end2 + 3)

    tree[ content1b ] = content1c


    fs.writeFileSync('./output1.txt', content1a + content1d)

    fs.writeFileSync('./output2.txt', content2a + tree[ content2b ] + content2c)

  }

  justLoading(): void {
      const contextService = new ContextService()
      const context1 = contextService.newDefaultContext()
      const fileWalkerService = new SttFileWalkerService(contextService)
      const fileWalker1 = fileWalkerService.newFileWalker('example1.txt')
      const compendiumService = new SttCompendiumService()
      const compendium = compendiumService.newCompendium()
  }

}
