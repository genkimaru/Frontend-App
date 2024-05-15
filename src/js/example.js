// 'use strict'

function Example(name){

  if(!(this instanceof Example)){

throw new TypeError(' Class constructor Example cannot be invoked without new')
  }
  this.name = name
}

// Example.prototype.getName = function (){
// return this.name
// }

Object.defineProperty(Example.prototype , 'getName' , {
    value : function (){
        if(! (this instanceof Example)){
            throw new TypeError(' Class constructor Example cannot be invoked without new')
        }
        return this.name
        }
})
      

// let a = new Example('abc')
// console.log(a.getName())

let a =  new Example('abc')
console.log(a.getName())
// console.log(name)
