function generateFibonacci(n){
    if(n === 0){
        return 1;
    }else if(n === 1){
        return 1;
    }
    else{
        return generateFibonacci(n - 1) +  generateFibonacci(n -2);
    }
}


 
// console.log(generateFibonacci(5))

//  JS 建议加上;
function*  generateFibonacci2(){
    let a = 1 , b =  1;
    while(true){
        yield a ;
        [a , b ] =[ b ,a + b ];
    }
}

const g = generateFibonacci2()
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)

  