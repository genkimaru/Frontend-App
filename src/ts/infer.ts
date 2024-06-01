// infer 的类型推断。
type PromiseType<T> =  T extends Promise< infer K >? K : T  
type pt = PromiseType<Promise<String>>





type ArrayType<T> = T extends (infer  I)[] ? I : T
type at = ArrayType<[string ,number]>
type at2 = ArrayType<string[]>




