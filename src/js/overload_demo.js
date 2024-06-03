import createOverloadFunction from './overload.js';

const getUser = createOverloadFunction()

getUser.addImpl('string', (name) => `Hello ${name}`);

getUser.addImpl('string', 'string', (name , name2) => `Hello ${name} and  ${name2}`);

getUser.addImpl('string', 'number', (name , age) => `Hello ${name}, you are ${age} years old`);

getUser.addImpl('number', 'string', (age , name) => `Hello ${name}, you are ${age} years old`);

// test
getUser('kevin');
getUser('kevin','kate');
getUser('kevin', 25);
getUser(25 ,'kevin');