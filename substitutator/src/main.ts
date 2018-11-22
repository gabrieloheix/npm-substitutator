//
//  main.ts
//
//  Main entry point of the program
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

import { SttSubstitutator, SttMetaProvider } from './App'


export = function main(optionsObj: any) {

  const metaProvider = new SttMetaProvider()

  const optionsProvider = metaProvider.newOptionsProvider()
  const options = optionsProvider.parseOptions(optionsObj);

  const substitutator = new SttSubstitutator(metaProvider, options)
  substitutator.substitute()


  let all = 'a'
  all += substitutator.b()
  all += substitutator.dummy()

  return all
};
