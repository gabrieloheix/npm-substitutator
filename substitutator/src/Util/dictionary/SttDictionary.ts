//
//  SttDictionary.ts
//
//  Storing element using a key
//
//
//  Substitutator
//
//  Author: Gabriel Oheix
//  License: GPL v3
//
//  Creation Date: December 2018
//  Last Modified: December 2018
//


export class SttDictionary<T = never> {

  private obj: any


  constructor() {
    this.obj = {}
  }


  set(key: string, value: T): SttDictionary<T> {
//console.log('typeof T:', typeof value)
    this.obj[ key ] = value
    return this
  }

  get(key: string): T {
    return this.obj[ key ]
  }

  has(key: string): boolean {
    return (key in this.obj)
  }

}
