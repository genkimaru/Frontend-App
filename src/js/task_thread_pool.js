class TaskPool {
    constructor(maxTasks) {
      this.maxTasks = maxTasks;
      this.tasks = [];
      this.runningTasks = 0;
    }
  
    addTask(taskDuration) {
      return new Promise((resolve, reject) => {
        const taskStartTime = this.getNextTaskStartTime();
        const taskEndTime = taskStartTime + taskDuration;
  
        const task = {
          duration: taskDuration,
          startTime: taskStartTime,
          endTime: taskEndTime,
          resolve: resolve,
          reject: reject
        };
  
        this.tasks.push(task);
        this.scheduleNextTask();

        return {
          promise: new Promise((resolve, reject) => {
            task.resolve = resolve;
            task.reject = reject;
          }),
          startTime: taskStartTime
        };
      });
    }
  
    getNextTaskStartTime() {
      if (this.tasks.length === 0) {
        return Date.now();
      } else {
        const lastTask = this.tasks[this.tasks.length - 1];
        return lastTask.endTime;
      }
    }
  
    scheduleNextTask() {
      if (this.runningTasks < this.maxTasks && this.tasks.length > 0) {
        const task = this.tasks.shift();
        this.runningTasks++;
  
        setTimeout(() => {
          task.resolve(Date.now());
          this.runningTasks--;
          this.scheduleNextTask();
        }, task.duration);
      }
    }
  }
  
  // 使用示例
  const taskPool = new TaskPool(2);
  
  const task1 = taskPool.addTask(2000);
  console.log('Task 1 start time:', task1.startTime);
  task1.promise.then(result => {
    console.log('Task 1 result:', result);
  });
  
  const task2 = taskPool.addTask(3000);
  console.log('Task 2 start time:', task2.startTime);
  task2.promise.then(result => {
    console.log('Task 2 result:', result);
  });
  
  const task3 = taskPool.addTask(1000);
  console.log('Task 3 start time:', task3.startTime);
  task3.promise.then(result => {
    console.log('Task 3 result:', result);
  });
  