import createOverloadFunction from './overload.js';

const getUser = createOverloadFunction()

getUser.addImpl('string', (name) => `Hello ${name}`);

getUser.addImpl('string', 'string', (name , name2) => `Hello ${name} and  ${name2}`);

getUser.addImpl('string', 'number', (name , age) => `Hello ${name}, you are ${age} years old`);

getUser.addImpl('number', 'string', (age , name) => `Hello ${name}, you are ${age} years old`);

// test
console.log(getUser('kevin'));
console.log(getUser('kevin','kate'));
console.log(getUser('kevin', 25));
console.log(getUser(25 ,'kevin'));