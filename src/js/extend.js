function ParentClass(name) {
    this.name = name;
  }
  
  ParentClass.prototype.sayName = function() {
    console.log("My name is " + this.name);
  };

  
  function ChildClass(name, age) {
    ParentClass.call(this, name); // 调用父类构造函数,初始化父类属性
    this.age = age;
  }
  

//   console.log(ChildClass.prototype.constructor)
  ChildClass.prototype = Object.create(ParentClass.prototype); // 将子类原型指向父类原型
//   console.log(ChildClass.prototype.constructor)
  ChildClass.prototype.constructor = ChildClass; // 修正子类的构造函数

  
  ChildClass.prototype.sayAge = function() {
    console.log("I am " + this.age + " years old.");
  };


  for (const i in ChildClass.prototype){
    console.log(i)
  }

//   let child = new ChildClass("Alice", 25);
// child.sayName(); // "My name is Alice"
// child.sayAge(); // "I am 25 years old."

    