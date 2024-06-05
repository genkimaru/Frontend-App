// 定义每种动物的移动规则和捕获规则
const animalRules = {
    '🐯': {
      name: '老虎',
      move: (currentPos, newPos) => {
        // 计算老虎移动的格子数
        const dx = Math.abs(newPos % 8 - currentPos % 8);
        const dy = Math.abs(Math.floor(newPos / 8) - Math.floor(currentPos / 8));
        return dx + dy <= 3; // 老虎最多可以移动3个格子
      },
      capture: (currentPos, newPos) => {
        // 老虎可以捕获任何动物,除了老鼠
        return board[newPos] !== '🐭';
      }
    },
    '🐭': {
      name: '老鼠',
      move: (currentPos, newPos) => {
        // 老鼠只能移动一个格子
        const dx = Math.abs(newPos % 8 - currentPos % 8);
        const dy = Math.abs(Math.floor(newPos / 8) - Math.floor(currentPos / 8));
        return dx + dy === 1;
      },
      capture: () => false // 老鼠不能被捕获
    },
    // 其他动物的移动和捕获规则...
  };


  let selectedPiece = null;

board.addEventListener('click', (e) => {
  if (e.target.matches('.board div')) {
    const pos = Array.from(board.children).indexOf(e.target);
    const piece = board[pos];

    if (selectedPiece === null && piece !== '') {
      // 选择一个棋子
      selectedPiece = pos;
      e.target.classList.add('selected');
    } else if (selectedPiece !== null) {
      // 尝试移动棋子
      const rules = animalRules[piece];
      if (rules && rules.move(selectedPiece, pos)) {
        // 移动棋子
        board[pos] = board[selectedPiece];
        board[selectedPiece] = '';
        e.target.textContent = board[pos];
        board.children[selectedPiece].textContent = '';
        selectedPiece = null;
        e.target.classList.remove('selected');

        // 检查是否有动物被捕获
        if (rules.capture(selectedPiece, pos)) {
          // 从棋盘上移除被捕获的动物
          board[pos] = '';
          e.target.textContent = '';
        }
      } else {
        // 取消选择
        board.children[selectedPiece].classList.remove('selected');
        selectedPiece = null;
      }
    }
  }
});

  