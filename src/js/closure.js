f = (function fn() {
    let obj = {
        a: 1,
        b: 2
    }
    return {
        get: function (k) {
            // if (obj.hasOwnProperty(k))
            return obj[k]
            //  else return undefined
        }
    }
})()

console.log(f.get('a'))

// 怎样在不改变以上源代码的前提下，修改obj的属性值。

// Object.prototype.abc = function (){
//     return this;
// }


Object.defineProperty(Object.prototype, 'abc',
    { get :  function () { return this; } }
)

let o = f.get('abc')
console.log(o)
o.a = 10
o.b = 20
console.log(o)

// get: function (k) {
//     if (obj.hasOwnProperty(k))
//     return obj[k]
//      else return undefined
// }


// 或者 Object.setPrototypeOf(obj , null)