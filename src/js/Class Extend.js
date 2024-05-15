class Parent{
    constructor(name){
        this.name = name
    }

    syaName(){
        console.log(this.name)
        return this.name
    }

}

class  Child extends Parent{
    constructor(name ,age){
        super(name)
        this.age  = age
    }

    sayAge(){
        console.log(this.age)
        return this.age
    }
}

let c = new Child('aa' , 20)
c.syaName()
c.sayAge();