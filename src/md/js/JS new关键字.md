这个问题涉及到 JavaScript 中函数调用的不同方式,以及它们对函数内部 `this` 的影响。

1. `let p = new Person('a')`
   - 这种方式是使用 `new` 关键字调用 `Person` 函数,即将其作为一个构造函数来使用。
   - 当使用 `new` 关键字调用函数时,函数内部的 `this` 会绑定到新创建的对象上。
   - 在构造函数中,我们使用 `this.name = name;` 来设置新创建对象的 `name` 属性,因此 `p` 对象会有一个 `name` 属性,值为 `'a'`。

2. `let p = Person('a')`
   - 这种方式是直接调用 `Person` 函数,没有使用 `new` 关键字。
   - 当不使用 `new` 关键字调用函数时,函数内部的 `this` 会默认绑定到全局对象(在浏览器中是 `window` 对象)。
   - 在 `Person` 函数中,我们使用 `this.name = name;` 来设置 `this` 的 `name` 属性,但由于 `this` 此时指向全局对象,因此并不会创建一个新的对象,也不会设置任何属性。
   - 所以在这种情况下,`p` 变量并没有被赋值为任何有意义的对象。

总结:
- 使用 `new` 关键字调用函数时,函数内部的 `this` 会绑定到新创建的对象上,从而正确地设置了对象的属性。
- 直接调用函数(没有使用 `new` 关键字)时,函数内部的 `this` 会绑定到全局对象,这通常不是我们所期望的行为。

为了避免这种问题,通常建议在构造函数中使用 `new.target` 来检查函数是否被正确地使用为构造函数,如下所示:

```javascript
function Person(name) {
  if (!new.target) {
    throw new Error('Person must be called with new');
  }
  this.name = name;
}

let p1 = new Person('Alice'); // 正确
let p2 = Person('Bob'); // 抛出错误
```

这样可以确保函数只能通过 `new` 关键字来调用,从而避免意外情况的发生。



正因为如此，所以可以得知
```
Person(){
    return this;
}

let p = Person();
```
p 是window对象。