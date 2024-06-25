function range(start , stop , step){
    return Array.from({length: (stop - start )/ step + 1}, (_ , i ) => start + i*step )
}

console.log(range(0, 10 ,2))

// Array.from() 第一个参数是 一个iterator 类型 或者是 arrayLike 的类型
// arraylike的 类型是各种特殊的类型，包含有length的属性。