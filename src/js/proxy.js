let handler = {
 set : function(obj , prop , value) {
        if(obj[prop] && typeof  obj[prop]  !==  'number') {
            console.error('must be a number')
            return false;
        }
        if(value &&  value < 0) {
            console.error('value must be positive ');
            return false;
        }
        obj[prop] = value;
    }
}

let p = new  Proxy({} , handler);
p.age = -1;
console.log(p.age)