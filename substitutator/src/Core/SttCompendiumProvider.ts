//
//  SttCompendiumProvider.ts
//
//  Provide a Compendium instance
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

import { SttCompendium } from './compendium/SttCompendium'


export class SttCompendiumProvider {


  constructor() {
  }


  newCompendium(): SttCompendium {
  	return new SttCompendium()
  }

}
