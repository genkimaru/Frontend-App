function Father() {}
function Child()  {}
Father.prototype.myName     = "father";

// 子原型指向父对象，同时子对象的原型链，指向了父原型
Child.prototype             = new Father();
// new Father()对象的构造器会指向Father
// 这里修改指向Child不会影响其它Father构造的对象
Child.prototype.constructor = Child;

var c = new Child();
console.log(c instanceof Child)   // true
console.log(c instanceof Father)  // true

console.log(c.myName)             // father
// 覆盖父原型属性
c.myName = "child";
console.log(new Father().myName); // father