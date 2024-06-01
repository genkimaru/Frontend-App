class Engine{
    start(){
        console.log(this.engine_name + " is starting")
    }
}

 class TOYOTAEngine extends Engine{
    constructor(name){
        super();    
        this.engine_name = name;
    }
}

 class HONDAEngine extends Engine{
    constructor(name){
        super();
        this.engine_name = name;
    }
}

module.exports = {
    Engine,
    TOYOTAEngine,
    HONDAEngine,
}