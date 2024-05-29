/**
 * 
 * JS 实现curry化。
 */

function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return function(...moreArgs) {
            //递归调用curried， 将之前的参数和返回函数的参数进行联合后，调用curried
          return curried.apply(this, args.concat(moreArgs));
        };
      }
    };
  }
  
  // 示例使用
  function add(a, b, c) {
    return a + b + c;
  }
  
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(1, 2, 3)); // Output: 6
  console.log(curriedAdd(1)(2, 3)); // Output: 6
  console.log(curriedAdd(1)(2)(3)); // Output: 6
  