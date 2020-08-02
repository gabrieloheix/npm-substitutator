//
//  SttSubstitutator.ts
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
//  Last Modified: July 2020
//

import { SttOptions } from '../Core'

import { SttMetaProvider } from './SttMetaProvider'


import * as fs from 'fs'
import * as util from '../Util'


export class SttSubstitutator {

  metaProvider: SttMetaProvider
  options: SttOptions

  
  constructor(metaProvider: SttMetaProvider, options: SttOptions) {
    this.metaProvider = metaProvider
    this.options = options
  }


  b(): string {
    return 'b'
  }

  dummy(): string {
    let _ = ''

    const fiProvider = this.metaProvider.newFileInfoProvider()
    const fi = fiProvider.newSttFileInfo('')
    _ += fi.c()

    const optionsProvider = this.metaProvider.newOptionsProvider()
    const options = optionsProvider.parseOptions({})
    _ += options.d()

    const compendiumProvider = this.metaProvider.newCompendiumProvider()
    const compendium = compendiumProvider.newCompendium()
    _ += compendium.e()

    const contextProvider = this.metaProvider.newContextProvider()
    const context = contextProvider.newFileRootContext('')
    _ += context.f()

    const fileinfo = new util.SttFileInfo('path')

    const blockProvider = this.metaProvider.newBlockProvider()
    const block = blockProvider.newBlock('', fileinfo, 0, 0, [])
    _ += block.g()

    const fileReaderProvider = this.metaProvider.newFileReaderProvider()

    const fwProvider = this.metaProvider.newFileWalkerProvider(compendium,
          fileReaderProvider, fiProvider, contextProvider, blockProvider)
    const fw = fwProvider.newFileWalker('')
    _ += fw.h()



    class Foo<T/* = never*/> {
        bar(item: T): void {
            console.log('typeof T: ', typeof item)
        }
    }

    const foo1 = new Foo<string>() // T specified
    foo1.bar('hello')
    //foo1.bar(6) // error TS2345: Argument of type '6' is not assignable to parameter of type 'string'

    const foo2 = new Foo() // T missing
    foo2.bar('hello')
    foo2.bar(6) // works with no complaint



    const dictionary = new util.SttDictionary<string>()
    dictionary.set('key', 'i')
    //dictionary.set('number', 6)
    _ += dictionary.get('key')

    return _
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

}
