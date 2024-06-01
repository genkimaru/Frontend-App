class MyPromise {
    constructor(executor) {

        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        this.onFullfilledCallbacks = []
        this.onRejectedCallbacks = []

        this.resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fullfilled'
                this.value = value
                //             this.onFullfilledCallbacks.forEach(callback => callback(this.value))
            } else {
                this.onFullfilledCallbacks.forEach(callback => callback(this.value))
            }

        }


        this.reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason
                console.log(reason)
                //            this.onRejectedCallbacks.forEach(callback => callback(this.reason))
            } else {
                console.error(reason)
                this.onRejectedCallbacks.forEach(callback => callback(this.reason))
            }

        }

        try {
            executor(this.resolve, this.reject)
        } catch (e) {
            this.reject(e)
        }

    }

    then(onFulfilled, onRejected) {
        // return new MyPromise((resolve, reject) => {


        const fulfilledHandler = (value) => {
            if (typeof onFulfilled === 'function') {
                 onFulfilled(value)
            } else {
                  value
            }

        }


        const rejectedHandler = (reason) => {

            if (typeof onRejected === 'function') {
                 onRejected(reason)
            } else {
                 reason
            }

        }
        this.onFullfilledCallbacks.push(fulfilledHandler);
        this.onRejectedCallbacks.push(rejectedHandler);


        if (this.state === 'fullfilled') {
            this.resolve(this.value)

        } else {
            this.reject(this.reason)
        }
        // })

        return this;
    }


    catch(reject) {
        return this.then(undefined, reject)
    }

}


let x = 1
const executor = function (resolve, reject) {
    if (x % 2 === 0) {
        resolve('message')
    } else {
        reject('error')
    }
}

const MyPromise_2 = new MyPromise(executor).then(
    (result) => {
        console.log(result)
        x += 1
    },
    (err) => {
        console.log(err)
        x += 1
    }
)