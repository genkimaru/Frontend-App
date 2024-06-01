function Person(name){
        if(!new.target){
            throw new  Error('must use new keyword');
        }
        this.name = name;

}


// 必须使用new来 得到Person对象。

