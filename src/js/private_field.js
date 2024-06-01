class Person{

    #age;
    getAge(){
        return this.#age
    }
    setAge(age){
            this.#age = age;
    }

    constructor(age){
        this.#age = age;
    }
}


let p = new Person('Jone' ,10);
p.setAge(20);
console.log(p.getAge())
