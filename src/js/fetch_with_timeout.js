function createFetchWithTimeout(timeout){
    return function (url ,options){
        options = options || {};
        // 考虑到可能options中本来就存在的signal造成的干扰
        // if(options.signal){
        //     const signal = options.signal;
        //     signal.addEventListener('abort' , ()=>{
        //         controller.abort();
        //     })
        // }
        // let controller = new AbortController();
        // options.signal = controller.signal;
        return new Promise((resolve, reject) => {
            fetch(url ,options).then(resolve , reject)
            setTimeout(() => {
                reject('request timeout')
                // 考虑取消掉请求。
                // controller.abort();
            } , timeout)
        })
    }
}


const fetchWithTimeout = createFetchWithTimeout(10000);
fetchWithTimeout('https://picsum.photos/200' ).then(data => console.log(data) , 
err => console.log(err));