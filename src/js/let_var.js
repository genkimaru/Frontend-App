// 使用 var
function varExample() {
  console.log(x); // Output: undefined
  
  if (true) {
    var x = 5;
    console.log(x); // Output: 5
  }

  console.log(x); // Output: 5
}
varExample();

// 使用 let
function letExample() {
   console.log(y); // Uncaught ReferenceError: y is not defined
  
  if (true) {
    let y = 5;
    console.log(y); // Output: 5
  }

  console.log(y); // Uncaught ReferenceError: y is not defined
}
letExample();
