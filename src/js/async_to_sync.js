function convertToSync() {
    try {
      // 先抛出一个错误信息
      throw new Error('Error message');
    } catch (error) {
      // 在 catch 块中执行异步函数
      return asyncFunction()
        .then(result => {
          // 同步处理结果
          console.log(result);
          return result;
        })
        .catch(err => {
          // 处理异步函数中的错误
          console.error(err);
          throw err;
        });
    }
  }
  
  async function asyncFunction() {
    return new Promise((resolve, reject) => {
      // 异步操作
      setTimeout(() => {
        resolve('Async function result');
      }, 2000);
    });
  }
  
  // 调用同步函数
  try {
    const result = convertToSync();
    console.log('Result:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  
