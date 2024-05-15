class MyPromise {
    constructor(executor) {

        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        this.onFullfilledCallbacks = []
        this.onRejectedCallbacks = []

        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fullfilled'
                this.value = value
                this.onFullfilledCallbacks.forEach(callback => callback(this.value))
            }

        }


        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason
                this.onRejectedCallbacks.forEach(callback => callback(this.reason))
            }
        }

        try {
            executor(resolve, reject)
        } catch {
            reject()
        }

    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            const fulfilledHandler = (value) => {
                if (typeof onFulfilled === 'funciton') {
                    resolve(onFulfilled(value))
                } else {
                    resolve(value)
                }

            }


            const rejectedHandler = (reason) => {

                if (typeof onRejected === 'funciton') {
                    reject(onRejected(reason))
                } else {
                    reject(reason)
                }

            }


            if (this.state === 'pending') {

                this.onFullfilledCallbacks.push(fulfilledHandler)
                this.onRejectedCallbacks.push(rejectedHandler)

            } else if (this.state === 'fullfilled') {
                fulfilledHandler(this.value)

            } else {
                rejectedHandler(this.reason)
            }
        }
        )
    }


    catch( reject){
     return  this.then(undefined , reject)
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
    } ,
    (err) => {
        console.log(err)
        x += 1
    }
)