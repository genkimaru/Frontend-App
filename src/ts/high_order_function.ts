// high order function

// function as returned value
function add(x:number): (y: number) => number {
    return function(y:number){
        return x + y;
    }
}
// function as parameter value
function multiple_x(x : number, fun : (...args :any[])=> number ){
    return  fun() * 10;
}

// receive function and return function.
function  handle_chain(raw: string , fun: (s : string) => string): (a: string)=> string {
    let prefix_str = fun(raw);
    return function(suffix : string){
        return prefix_str +  suffix;
    }
}

// invoke the chain function
let result = handle_chain('kevin' , (s : string) => 'hello ' + s)(' , how are you?');
console.log(result);


class Grain{}
class Rice{}
class Water{}

function  rice_machine(x : Grain): Rice{
return new Rice();
}

function water_cleaner(x: Water): Water{
return new Water();
}

class Station {
    rice_machine: (x: Grain) => Rice;
    water_cleaner: (x: Water) => Water;
    constructor(rice_machine: (x: Grain)=> Rice , water_machine : Function){
        this.rice_machine = rice_machine;
        this.water_cleaner = water_cleaner;
    }
}
function makeStation(rice_machine : Function , water_cleaner : Function){
    return new Station(rice_machine , water_cleaner);
}