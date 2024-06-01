Object.defineProperty() 是 JavaScript 中一个非常强大的方法,它允许你定义或修改一个对象的属性。以下是它的一般用法:

1. 基本语法:
```javascript
Object.defineProperty(obj, prop, descriptor)
```
- `obj`: 要定义属性的对象。
- `prop`: 要定义或修改的属性的名称。
- `descriptor`: 要定义或修改的属性描述符。

2. 属性描述符可以是以下两种类型之一:
   - **数据描述符**: 包含`value`和`writable`属性。
   - **访问器描述符**: 包含`get`和`set`函数。

3. 数据描述符示例:
```javascript
const obj = {};
Object.defineProperty(obj, 'foo', {
  value: 'Hello, World!',
  writable: true,
  enumerable: true,
  configurable: true
});
```
- `value`: 属性的值。
- `writable`: 属性是否可写。
- `enumerable`: 属性是否可枚举。
- `configurable`: 属性是否可以被删除或是否可以改变它的描述符。

4. 访问器描述符示例:
```javascript
const obj = {
  _age: 30
};

Object.defineProperty(obj, 'age', {
  get: function() {
    return this._age;
  },
  set: function(value) {
    this._age = value;
  },
  enumerable: true,
  configurable: true
});
```
- `get`: 属性的 getter 函数。
- `set`: 属性的 setter 函数。

5. 注意事项:
   - 如果同时指定了 `value` 或 `writable` 和 `get` 或 `set`，会抛出错误。
   - 如果不指定 `enumerable`、`configurable` 和 `writable`，它们默认为 `false`。

总之, `Object.defineProperty()` 是一个非常强大的 JavaScript 方法,它允许你精细地控制对象属性的各种特性。它在创建自定义对象、实现响应式数据绑定等场景中都有广泛的应用。