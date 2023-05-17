let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function makeMove(index) {
  if (board[index] === "") {
    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;
    document.getElementsByClassName("cell")[index].style.backgroundColor = "lightblue";

    if (checkWin()) {
      alert("Player " + currentPlayer + " wins!");
      resetBoard();
    } else if (checkDraw()) {
      alert("It's a draw!");
      resetBoard();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  return !board.includes("");
}

function resetBoard() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].style.backgroundColor = "lightgray";
  }
}

// Add event listener to the "Reset" button
document.querySelector("button").addEventListener("click", resetBoard);
