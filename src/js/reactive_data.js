// const Vue = require('vue')

let obj = {
    a:1,
    b:2,
    c:{
        d: 3,
        e: 4
    }
}
function getObserver(obj){
    for (let p in obj ){
        Object.defineProperty(obj , p, {
            get : function(){
                console.log(`get obj.${p}`)
                return this.p;
            },
            set : function(value){
                console.log(`set obj.${p}`)
                this.p = value;
            }
        })
    }
    return obj;
}

let obsObj = getObserver(obj);
obsObj.a = 2
console.log(obsObj.a) 