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

//import { Substitutator, Options } from './Core'

import { SttSubstitutator, SttMetaProvider } from './App'


export = function main(optionsObj: any) {

  //const options = new Options(optionsObj);

  //const substitutator = new Substitutator(options);

  //substitutator.substitute();



  let all = 'a'

  const metaProvider = new SttMetaProvider()
  const substitutator2 = new SttSubstitutator(metaProvider)
  all += substitutator2.b()

  all += substitutator2.dummy()

  return all
};
