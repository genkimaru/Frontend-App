function sum(){
    let total = 0;
    for(let i of arguments) {
        total += i;
    }
    return total;
}


function sum2(...args){
    let total = 0;
    for (let i of args) {
        total += i;
    }
    return total;
}

console.log(sum(1,2,3,4,5))
console.log(sum2(1,2,3,4,5))
