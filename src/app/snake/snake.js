// 获取画布元素并设置其大小
const canvas = document.getElementById('game-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// 定义蛇的初始长度和位置
let snake = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 }
];


// 记录当前方向
let currentDirection = 'right';

// 监听键盘事件,更新蛇的移动方向
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      if (currentDirection !== 'right') currentDirection = 'left';
      break;
    case 'ArrowUp':
      if (currentDirection !== 'down') currentDirection = 'up';
      break;
    case 'ArrowRight':
      if (currentDirection !== 'left') currentDirection = 'right';
      break;
    case 'ArrowDown':
      if (currentDirection !== 'up') currentDirection = 'down';
      break;
  }
});


function moveSnake() {
    // 更新蛇头的位置
    const head = { ...snake[0] };
    switch (currentDirection) {
      case 'left':
        head.x -= 2;
        break;
      case 'up':
        head.y -= 2;
        break;
      case 'right':
        head.x += 2;
        break;
      case 'down':
        head.y += 2;
        break;
    }
    snake.unshift(head);
    snake.pop();
  }

  
  function detectCollision() {
    const head = snake[0];
    // 检查是否与边缘碰撞
    if (
      head.x < 0 ||
      head.x >= canvas.width ||
      head.y < 0 ||
      head.y >= canvas.height
    ) {
      return true;
    }
    // 检查是否与自身碰撞
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        return true;
      }
    }
    return false;
  }

  
  let food = {
    x: Math.floor(Math.random() * (canvas.width / 10)) * 10,
    y: Math.floor(Math.random() * (canvas.height / 10)) * 10
  };
  
function condition(head , food){
  if(Math.abs(head.x - food.x) <= 5 && Math.abs(head.y - food.y) <= 5){
        return true;
    }
}

  function eatFood() {
    const head = { ...snake[0] };
    if (condition(head, food)) {
      // 增加蛇的长度
      snake.push({ ...snake[snake.length - 1] });
      // 生成新的食物
      food = {
        x: Math.floor(Math.random() * (canvas.width / 10)) * 10,
        y: Math.floor(Math.random() * (canvas.height / 10)) * 10
      };
    }
  }

  
  function drawGame() {
    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // 绘制蛇
    snake.forEach((segment) => {
      ctx.fillRect(segment.x, segment.y, 10, 10);
    });
  
    // 绘制食物
    ctx.fillRect(food.x, food.y, 10, 10);
  }
  
  // 游戏循环
  function gameLoop() {
    moveSnake();
    eatFood();
    if (detectCollision()) {
      alert('Game Over!');
      return;
    }
    drawGame();
    requestAnimationFrame(gameLoop);
  }
  
  // 开始游戏
  gameLoop();
  