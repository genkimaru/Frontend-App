function debounce(func , delay){
    let timeoutId;
    return function (...args){
        clearTimeout(timeoutId);
        setTimeout(() => {
            func.apply(this , args)
        } , delay)
    }

}

function handleClick(){
    console.log('click...')
}

debouncedHandleClick = debounce(handleClick , 2000)


