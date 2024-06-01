function* gen(){
    let x = 1;
    yield x + 1;
    yield x + 2;
    yield + x +3;
}
//调用生成器，需要将生成器赋给一个变量。
//console.log(gen().next().value)
f = gen();
// console.log(f.next().value)

const obj = {
    get : function* (){
        let x = 0
      while(true){  
        yield ++x;}
    }
}
// f = obj.get()
// console.log(f.next().value)
// console.log(f.next().value)

function* f3(){
    let i = 1
    while(i < 4){
        yield i ;
        yield i * i;
        i++;
    }
    
}
let fn = f3()
let key , value;
do{
    key =  fn.next().value
    value = fn.next().value
   console.log(key ,value)
}while(value !== undefined)
