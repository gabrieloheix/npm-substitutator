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

import { Substitutator, Options } from './Core'


export = function main(optionsObj: any) {

  const options = new Options(optionsObj);

  const substitutator = new Substitutator(options);

  substitutator.substitute();


  return 'r';
};
