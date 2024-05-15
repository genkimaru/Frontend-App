// [a ,b] = [1 , 2]
// console.log(a , b)

    
// [ c , d ] =  {a : 1 , b: 2 , [Symbol.iterator] : function(){
//     arr = [ 1 ,2]
//     return arr[Symbol.iterator]()
// }
// }


Object.prototype[Symbol.iterator] = function  (){
    return Object.values(this)[Symbol.iterator]()
}

arr = [1,2]
i = arr[Symbol.iterator]


var [c , d] =  { a : 1 , b : 2}
console.log(c ,d )
