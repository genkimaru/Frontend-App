class EventEmitter{
    events = [];
    on(eventName,callback){
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(callback);
    }

    emit(eventName,...args){
        this.events[eventName] && this.events[eventName]
        .forEach(callback => {
            callback(...args);
        })
    }
}

let eventEmitter = new EventEmitter();
eventEmitter.on('mouseEvent',(a,b) => {
    console.log(a,b);
})

eventEmitter.emit('mouseEvent',1,2);
eventEmitter.emit('mouseEvent',3,4);