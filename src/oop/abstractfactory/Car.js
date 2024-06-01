
const {  Engine ,TOYOTAEngine , HONDAEngine} = require('./Engine.js')
const {Wheel , TOYOTAWheel , HONDAWheel} =  require('./Wheel.js')

class Car{


    constructor(engine , wheel){
        this.engine = engine;
        this.wheel = wheel;
    }
    

    run(){
        this.engine.start();
        this.wheel.start();
    }
}
let toyota_engine = new TOYOTAEngine('toyota engine')
let honda_wheel = new HONDAWheel('honda wheel')
let car = new Car(toyota_engine , honda_wheel)
car.run();