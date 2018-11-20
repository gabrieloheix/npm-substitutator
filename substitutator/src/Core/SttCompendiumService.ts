//
//  SttCompendiumService.ts
//
//  Provide Compendium instances
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


export class SttCompendiumService {


  constructor() {
  }


  newCompendium(): SttCompendium {
  	return new SttCompendium()
  }

}
