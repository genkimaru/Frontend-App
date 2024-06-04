obj = {

    name : 'abc',

    name2 : this.name,

    fun1 :  () => { 
        console.log(this.name);
    },
    
    fun2 : function (){
        console.log(this.name);
    }

}

obj.fun1();

obj.fun2();

// 怎么理解 obj中的this.name 的this 指向的是 window对象呢？
// 可以大概认为 浏览器这个操作。
obj = {}  // obj 是挂到 window对象下的属性，window.obj  === obj
obj.name = 'abc'
obj.name2 = this.name
obj.fun1 = () => {console.log(this.name)}
function fun2 (){
    console.log(this.name)
}
obj.fun2 = fun2




