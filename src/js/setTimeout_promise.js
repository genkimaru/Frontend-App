//通过setInterval定时执行一个函数，需要返回函数的执行结果

list = [];
new Promise((resolve, reject) => {
  setInterval(() => {
    result = Math.random();
    list.push(result);
    resolve(list);
  }, 1000);
}).then((result) => {
  console.log(result);
});
