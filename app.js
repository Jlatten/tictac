let cells = document.querySelectorAll(".row> div");

for (let i = 0; i < cells.length; i++) {

    for (let j = 0; j <= 8; j++) {
        if (j % 2 == 1 || j === null) {
            cells[i].addEventListener("click", clickX);
        } else {
            cells[i].addEventListener("click", clickO);
        }
    }

}

function clickX() {
    event.target.textContent = "X";
}

function clickO() {
    event.target.textContent = "O";
}

/*if (i % 2 == 0 || i === null) {
       cells[i].addEventListener("click", clickX);
   }
   else {
          cells[i].addEventListener("click", clickO);
      }*/