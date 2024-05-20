class Wheel{
    start(){
        console.log(this.wheel_name + ' is startings')
    }
}

class TOYOTAWheel extends Wheel{
    constructor(name){
        super();
        this.wheel_name = name;
    }
}

class HONDAWheel extends Wheel {
    constructor(name){
        super();
this.wheel_name = name;
    }
}
module.exports =  {Wheel , TOYOTAWheel , HONDAWheel}