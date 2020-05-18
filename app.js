let cells = document.querySelectorAll('.row> div');

for (let i = 0; i < cells.length; i++) {

    if (cells[i] === null) {
        cells[i].addEventListener('click', ClickX);
    }
}

function ClickX() {
    event.target.textContent = 'X'
}

function ClickO() {
    event.target.textContent = 'O'
}

//if (cells[i] === 'x') {
//   function clicko() { event.target.textContent = 'o' }
//}