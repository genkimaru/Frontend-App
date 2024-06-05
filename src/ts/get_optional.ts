interface ComplexType{
    field: string;
    field2?: string;
    field3?: string;
}

// 给定任何一个类型，得到只包含其可选字段的类
type GetOptional<T> = {
    // P 就是 字段名 T[P] 就是 类型
    [P in keyof T as T[P] extends Required<T>[P] ? never : P ]:T[P]
}

// 同理，可以得到只包含其必填字段的类型
type GetMandatory<T> = {
    [P in keyof T as T[P] extends Required<T>[P]? P : never ]:T[P]
}

let a : GetOptional<ComplexType>  = {};
a.field2 = "";
a.field3 = "";

let b : GetMandatory<ComplexType>  = {field : ""};