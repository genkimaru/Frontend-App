// 注意： 在JS lambda函数中， this不是指代 lamdba函数本身，而是指代外部定义的lambda的环境。
// 而且， lambda和一般函数不一样的是，lambda无构造器，无prototype。

function out(){
    let a = function abc(){
        console.log(this)
    }
    let b = () => {
       
        console.log(this)
    }
    console.log(this)
    return [a , b];
}

// 在node 环境下 this 是指代 node 的最顶级对象。 

// 如果没有加new ， out中的this指代的是 node 的顶级对象。
// let [ a ,b] =  out()
//

// 加了new ， this 指代的是 out函数本身。
let [ a ,b] = new out()
a();

//但是 lambda还是指代的是 out的外面的this环境。
b();
