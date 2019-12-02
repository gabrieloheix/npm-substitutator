//
//  SttFileReaderProvider.ts
//
//  Provide FileReader instances
//
//
//  Substitutator
//
//  Author: Gabriel Oheix
//  License: GPL v3
//
//  Creation Date: December 2019
//  Last Modified: December 2019
//

import { SttFileReader } from './filereader/SttFileReader'


export class SttFileReaderProvider {


  constructor() {
  }


  newSttFileReader(path: string): SttFileReader {
    return new SttFileReader(path)
  }

}
