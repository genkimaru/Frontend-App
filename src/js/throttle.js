function throttle(func, delay) {
    let lastTime = 0;
  
    return function(...args) {
      const now = new Date().getTime();
      if (now - lastTime >= delay) {
        func.apply(this, args);
        lastTime = now;
      }
    };
  }
  

  // 需要节流的函数
function handleScroll() {
    console.log('Scrolling...');
  }
  
  // 创建一个节流版本的 handleScroll 函数
  const throttledScroll = throttle(handleScroll, 500);
  
  // 添加事件监听器
//   window.addEventListener('scroll', throttledScroll);
  