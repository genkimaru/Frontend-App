const obj = {

  // _打头的变量，是约定俗成的私有变量
    _age: 30
  };
  
  Object.defineProperty(obj, 'age', {
    // get 和 set 是属性描述符的 访问描述符
    get: function() {
      return this._age;
    },
    set: function(value) {
      this._age = value;
    },

    // 数据描述符。
    enumerable: true,
    configurable: true
  });

console.log(obj.age = 10)
console.log(obj.age )