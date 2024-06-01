Function.prototype.myApply = function(context, args) {
    if (typeof this !== 'function') {
      throw new TypeError('myApply must be called on a function');
    }
  
    // context = context || window;
    // || :  or operator , 返回第一个true的值。
    context = context || globalThis;
    context.fn = this;
  
    let result;
    if (args) {
      result = context.fn(...args);
    } else {
      result = context.fn();
    }
  
    delete context.fn;
    return result;
  };
  

  function greet(name, age) {
    console.log(`Hello, my name is ${name} and I'm ${age} years old.`);
  }
  
//   greet.myApply(null, ['Alice', 40]);
  // Output: Hello, my name is Alice and I'm 30 years old.


  greet.apply(null , ['Alice', 40])
  