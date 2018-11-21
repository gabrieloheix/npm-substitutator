//
//  SttFileInfoProvider.ts
//
//  Provide FileInfo instances
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

import { SttFileInfo } from './fileinfo/SttFileInfo'


export class SttFileInfoProvider {


  constructor() {
  }


  newSttFileInfo(path: string): SttFileInfo {
    return new SttFileInfo(path)
  }

}
