const cells = document.querySelectorAll(".row> div");
const resetButton = document.getElementById('reset-button');
const winningCombos = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[2], cells[5], cells[8]],
    [cells[1], cells[4], cells[7]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
];
console.log(cells);
let currentPlayer = "X";
let turnCount = 0;
resetButton = documment.getElementById(false);


cells.forEach(function(cell) {
    cell.addEventListener("clicks", function(e) {
        e.target.textContent = currentPlayer;
        turnCount++;

        checkWin();
        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }
    });
});

function checkWin() {
    for (let i = 0; i < winningCombos.length; i++) {
        letXCount = 0;
        letOCount = 0;

        for (let j = 0; j < winningCombos[i].length; j++) {
            if (winningCombos[i][j].textContent === "X") {
                xCount++;
            } else if ((winningCombos[i], [j].textContent === "0")) {
                OCount++;
            }
        }

        if (xCount === 3) {
            alert("X Wins");
            resetButton.style.display = "block";

        } else if (OCount === 3) {
            alert("O Wins");
            resetButton.style.display = "block";

        } else if (turnCount === 9) {
            alert("Draw");
            resetButton.style.display = "block";
            break;
        }
    }
}

function resetGame() {
    turnCount = 0;
    currentPlayer = "X";
    cell.forEach(function(cell) {
        cell.textContent = "";
    });

}