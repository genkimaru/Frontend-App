// destructure
let a = 1 , b = 2;
[a , b] = [b ,a];
console.log(`a : ${a} , b : ${b}`)

obj = { c : 1 , d : 2}

// const { c } = obj   相当于  const c = obj.c
const { c } = obj 

console.log(c)