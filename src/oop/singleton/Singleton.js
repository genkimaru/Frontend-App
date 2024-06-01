export class Singleton {
  static _instance = null;
  constructor() {
    if (!Singleton._instance) {
      Singleton._instance = this;
      return Singleton._instance;
    } 
    return Singleton._instance;
  }
}

let s = new Singleton();
let s2 = new Singleton();
console.log(s === s2);
