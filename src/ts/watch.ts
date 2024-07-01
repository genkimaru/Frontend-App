
type watcher<T> = {
    on<K extends keyof T & string >(event : `${K}Changed` , 
    callback : (oldvalue : T[K] , curvalue : T[K] ) => void ):void ;
}


declare  function watch<T>( obj : T ) : watcher<T>

let  r = watch(
    {
        "name" : 'abc',
        "age" : 10,
        "gender" : 'male'
    }
)

r.on<'age'>( "ageChanged", (a , b) => {} )
