const person = {
    name: 'Alice',
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }



  // 创建一个新的函数,将 person 对象的 greet 方法的 this 绑定到 person 对象
  const greetAlice = person.greet.bind(person);
  
  // 调用新的函数
  greetAlice(); // 输出: Hello, my name is Alice
  
  // 创建另一个对象
  const anotherPerson = {
    name: 'Bob'
  }
  
  // 将 person 对象的 greet 方法的 this 绑定到 anotherPerson 对象
  const greetBob = person.greet.bind(anotherPerson);
  
  // 调用新的函数
  greetBob(); // 输出: Hello, my name is Bob
  