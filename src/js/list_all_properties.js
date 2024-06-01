function getAllProperties(obj) {
    let properties = [];
    let currentObj = obj;
  
    while (currentObj !== null) {
      let props = Object.getOwnPropertyNames(currentObj);
      props.forEach(function(prop) {
        if (!currentObj.hasOwnProperty(prop)) {
          properties.push(prop);
        }
      });
      currentObj = Object.getPrototypeOf(currentObj);
    }
  
    return properties;
  }
  
  // 使用示例
  const person = {
    name: 'John',
    age: 30
  };
  
  const allProps = getAllProperties(person);
  console.log(allProps); // 输出: ['constructor', 'toString', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'valueOf', '__defineGetter__', '__defineSetter__', '__lookupGetter__', '__lookupSetter__', '__proto__', 'name', 'age']
  