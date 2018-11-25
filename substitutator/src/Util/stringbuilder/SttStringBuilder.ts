//
//  SttStringBuilder.ts
//
//  StringBuilder especially good to create a string character by character
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


export class SttStringBuilder {

  private static readonly ENOUGH = 100


  private concatenated: string
  private recent: string[]


  constructor() {
    this.concatenated = ''
    this.recent = []
  }


  append(piece: string): void {
    this.save(piece)
  }

  toString(): string {
    this.swallow()
    return this.concatenated
  }


  private save(piece: string): void {
    if (this.recent.length > SttStringBuilder.ENOUGH) {
      this.swallow()
    }
    this.recent.push(piece)
  }

  private swallow(): void {
    this.concatenated += this.recent.join('')
    this.recent = []
  }

}
