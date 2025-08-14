function shuffleArray(array) {
        const shuffled = [...array];

        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled;
      }

      const colors = [
        { bg: "bg-green-100", text: "text-green-500" },
        { bg: "bg-red-100", text: "text-green-500" },
        { bg: "bg-blue-100", text: "text-blue-500" },
        { bg: "bg-purple-100", text: "text-purple-500" },
        { bg: "bg-pink-100", text: "text-pink-500" },
        { bg: "bg-yellow-100", text: "text-yellow-500" },
        { bg: "bg-indigo-100", text: "text-indigo-500" },
        { bg: "bg-gray-100", text: "text-gray-500" },
        { bg: "bg-emerald-100", text: "text-emerald-500" },
        { bg: "bg-amber-100", text: "text-amber-500" },
        { bg: "bg-lime-100", text: "text-lime-500" },
        { bg: "bg-black", text: "" },
      ];

      const board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, null];
      const winningState = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, null];
      let emptyIndex = 11;

      const createCard = (number, idx) => {
        const color = colors[number ? number - 1 : 11]; // Use black for empty tile
        const isEmpty = number === null;

        return `<div 
          class="w-32 h-32 ${color.bg} ${
          color.text
        } flex items-center justify-center rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105 ${
          isEmpty ? "opacity-50" : ""
        }"
          data-index="${idx}"
          onclick="moveTileByClick(${idx})"
        >
          <span class="text-xl font-bold">${number || ""}</span>
        </div>`;
      };

      function renderBoard() {
        const boardGame = document.getElementById("board-game");
        boardGame.innerHTML = "";

        board.forEach((number, index) => {
          const card = createCard(number, index);
          const itemElement = document.createElement("div");
          itemElement.innerHTML = card;
          boardGame.appendChild(itemElement);
        });
      }

      function getRowCol(index) {
        return {
          row: Math.floor(index / 4),
          col: index % 4,
        };
      }

      function getIndex(row, col) {
        return row * 4 + col;
      }

      function canMove(fromIndex, toIndex) {
        const from = getRowCol(fromIndex);
        const to = getRowCol(toIndex);

        return (
          (from.row === to.row && Math.abs(from.col - to.col) === 1) ||
          (from.col === to.col && Math.abs(from.row - to.row) === 1)
        );
      }

      function moveTile(direction) {
        const emptyPos = getRowCol(emptyIndex);
        let newRow = emptyPos.row;
        let newCol = emptyPos.col;

        switch (direction) {
          case "up":
            newRow = emptyPos.row - 1;
            break;
          case "down":
            newRow = emptyPos.row + 1;
            break;
          case "left":
            newCol = emptyPos.col - 1;
            break;
          case "right":
            newCol = emptyPos.col + 1;
            break;
        }

        if (newRow >= 0 && newRow < 3 && newCol >= 0 && newCol < 4) {
          const newIndex = getIndex(newRow, newCol);

          board[emptyIndex] = board[newIndex];
          board[newIndex] = null;
          emptyIndex = newIndex;

          renderBoard();
          checkWin();
        }
      }

      function moveTileByClick(clickedIndex) {
        if (canMove(clickedIndex, emptyIndex)) {
          board[emptyIndex] = board[clickedIndex];
          board[clickedIndex] = null;
          emptyIndex = clickedIndex;

          renderBoard();
          checkWin();
        }
      }

      function checkWin() {
        const isWon = board.every(
          (tile, index) => tile === winningState[index]
        );

        if (isWon) {
          setTimeout(() => {
            document.getElementById("winModal").classList.remove("hidden");
            document.getElementById("winModal").classList.add("flex");
          }, 300);
        }
      }

      function shuffleBoard() {
        for (let i = 0; i < 1000; i++) {
          const directions = ["up", "down", "left", "right"];
          const randomDirection =
            directions[Math.floor(Math.random() * directions.length)];

          const emptyPos = getRowCol(emptyIndex);
          let newRow = emptyPos.row;
          let newCol = emptyPos.col;

          switch (randomDirection) {
            case "up":
              newRow = emptyPos.row - 1;
              break;
            case "down":
              newRow = emptyPos.row + 1;
              break;
            case "left":
              newCol = emptyPos.col - 1;
              break;
            case "right":
              newCol = emptyPos.col + 1;
              break;
          }

          if (newRow >= 0 && newRow < 3 && newCol >= 0 && newCol < 4) {
            const newIndex = getIndex(newRow, newCol);
            board[emptyIndex] = board[newIndex];
            board[newIndex] = null;
            emptyIndex = newIndex;
          }
        }

        renderBoard();
      }

      function resetBoard() {
        board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, null];
        emptyIndex = 11;
        renderBoard();
      }

      document.addEventListener("keydown", (e) => {
        switch (e.key) {
          case "ArrowUp":
          case "w":
            moveTile("down");
            break;
          case "ArrowDown":
          case "s":
            moveTile("up");
            break;
          case "ArrowLeft":
          case "a":
            moveTile("right");
            break;
          case "ArrowRight":
          case "d":
            moveTile("left");
            break;
        }
      });

      shuffleBoard();