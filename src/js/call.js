// call apply bind 都是为了
// 改变函数内部的this指向。

function add(a ,b){
    console.log(this)
    return a + b
}


function myadd(a ,b){
    this.a = a;
    this.b = b ;
    return this.a + this.b;
}

// console.log( add.call({} , 1,2) )

// let o = {}
// console.log(myadd.call( o , 3,4))
// console.log(o)

// console.log( myadd.apply({} , [1,2]))
let ma = myadd.bind({} , [1 , 2])
console.log( ma() )