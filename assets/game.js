let currentPlayer = "X";
const cell_data_attr = "[data-cell]";
const WIN_MACHES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const gameCells = Array.from(document.querySelectorAll(cell_data_attr));

function startGame() {
    resetGame();

    gameCells.forEach(cell => {
        cell.addEventListener('click', handleCellClick, { once: true })
    })
}

function checkWin() {
    return WIN_MACHES.some(row => row.every(cell => {

        return gameCells[cell].textContent === currentPlayer
    }))
}

function isDraw() {
    return gameCells.every(cell => cell.textContent !== "");
}

function resetGame() {
    gameCells.forEach(cell => {
        cell.textContent = "";
    })

}

function handleCellClick(e) {

    e.target.textContent = currentPlayer;

    if (checkWin()) {
        alert('you win')
    } else {
        if (isDraw()) {
            alert('draw!')
        }
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}

startGame() 