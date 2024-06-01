// template string

const a = 5;
const b = 10;
console.log(`a + b  ${ a + b > 10 ? '> 10 ' : '< 10'} and
not ${2 * a + b}.`);

let literal_func = 
`
function (a){
    this.a = a;    
}
`
console.log(`${literal_func}`)