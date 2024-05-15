## JS 闭包漏洞

``` JS
f = (function fn() {
    let obj = {
        a: 1,
        b: 2
    }
    return {
        get: function (k) {
            return obj[k]
        }
    }
})()

```
f返回一个对象，对象有个方法get，可以传递一个参数，返回obj对应的这个属性值的 value

需要设计一个方式不改变源代码的情况下，修改obj的值


思路，通过原型链，给obj加上一个属性，给这个属性加上 **访问器描述符**， 访问器描述符返回对象本身。

```
Object.defineProperty(obj , 'abc' , {
    get : function(){
        return  this;
    }
})
```

这样通过 `let o = f.get('abc')` 可以获得obj对象，然后对obj进行a 和b的操作。