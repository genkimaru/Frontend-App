class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
      }
    };

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback(this.reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const fulfilledHandler = (value) => {
        try {
          if (typeof onFulfilled === 'function') {
            resolve(onFulfilled(value));
          } else {
            resolve(value);
          }
        } catch (err) {
          reject(err);
        }
      };

      const rejectedHandler = (reason) => {
        try {
          if (typeof onRejected === 'function') {
            resolve(onRejected(reason));
          } else {
            reject(reason);
          }
        } catch (err) {
          reject(err);
        }
      };

      if (this.state === 'pending') {
        this.onFulfilledCallbacks.push(fulfilledHandler);
        this.onRejectedCallbacks.push(rejectedHandler);
      } else if (this.state === 'fulfilled') {
        fulfilledHandler(this.value);
      } else if (this.state === 'rejected') {
        rejectedHandler(this.reason);
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}


// const myPromise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Success!');
//   }, 2000);
// });

let x = 1
const executor = function(resolve , reject){
  if(x % 2 === 0){
  resolve('message')
  }else{
  reject('error')
  }
}

const MyPromise_2 = new MyPromise(executor).then(
  (result)=>{
    console.log(result)
    x += 1
  }
).catch(
(err) => {
  console.log(err)
  x += 1
}

)


const MyPromise_3 = new MyPromise(executor).then(
  (result)=>{
    console.log(result)
  } , 
  (err) => {
    console.log(err)
  }
)


// myPromise
//   .then((value) => {
//     console.log(value); // Output: 'Success!'
//   })
//   .catch((error) => {
//     console.error(error);
//   });
