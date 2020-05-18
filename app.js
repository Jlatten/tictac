let cells = document.querySelectorAll(".row> div");

for (let i = 0; i < cells.length; i++) {
    if (i % 2 === 0 || i === null) {
        cells[i].addEventListener("click", clickX);
    }
}

function clickX() {
    event.target.textContent = "X";
}

function clickO() {
    event.target.textContent = "O";
}

//if (cells[i] === 'x') {
//   function clicko() { event.target.textContent = 'o' }
//}