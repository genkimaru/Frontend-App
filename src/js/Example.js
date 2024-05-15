/**
 * 这个例子说明 对于JS class 和 function的转化要点。
 * 
 *  JS 的二义性。。
 * 1. class 必须使用 new关键字。 
 * 而function 是都可以，但是加了new 和没加new有区别
 * 
 * 
 */

class Example{

    constructor(name){
        this.name = name
    }

    getName(){
        return this.name
    }
}

let e = new Example('abc')
// console.log(e.getName())


let e1 = Example('abc')

for(let i in e ){
    console.log(i)
}