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
//  Last Modified: August 2020
//


export class SttStringBuilder {

  private static readonly SPLIT = 100


  private olders: string[]
  private recent: string[]


  constructor() {
    this.olders = []
    this.recent = []
  }


  append(piece: string): void {
    if (this.recent.length > SttStringBuilder.SPLIT) {
      this.aggregate()
    }
    this.recent.push(piece)
  }

  getLast(n: number) {
    let remaining = n
    const extracted = []

    for (let i = this.recent.length - 1; i >= 0; i--) {
      const piece = this.recent[i]
      if (piece.length >= remaining) {
        // piece is too long
        const sub = piece.substring(piece.length - remaining)
        extracted.unshift(sub)
        return extracted.join('')
      } else {
        // piece will not be enough
        remaining -= piece.length
        extracted.unshift(piece)
      }
    }

    for (let i = this.olders.length - 1; i >= 0; i--) {
      const piece = this.olders[i]
      if (piece.length >= remaining) {
        // piece is too long
        const sub = piece.substring(piece.length - remaining)
        extracted.unshift(sub)
        return extracted.join('')
      } else {
        // piece will not be enough
        remaining -= piece.length
        extracted.unshift(piece)
      }
    }

    return extracted.join('')
  }

  toString(): string {
    this.aggregate()
    return this.olders.join('')
  }


  private aggregate(): void {
    const concatenated = this.recent.join('')
    this.olders.push(concatenated)
    this.recent = []
  }

}
