'use strict';

let table = document.querySelector('table');
let rowColNum = 9;
let board = '';

for (let y = 0; y < rowColNum; y++) {
    board += '<tr>';
    for (let x = 0; x < rowColNum; x++) {
        board += `<td data-x='${x}' data-y='${y}'></td>`;
    }
    board +='</tr>';
}

table.insertAdjacentHTML('afterbegin', board);

let squares = document.querySelectorAll('td');

//Заполняю клетки цветами и текстом
squares.forEach(function(square) {
    let sqX = square.dataset.x;
    let sqY = square.dataset.y;
    if ((sqX % 2 == 0 && sqY % 2 == 1) || (sqX % 2 == 1 && sqY % 2 == 0)) {
        square.style.backgroundColor = 'darkgrey';
    }
    if (sqX == 0 || sqY == 0) {
        square.style.backgroundColor = 'white';
    }

    for (let i = 1; i < rowColNum; i++) {
        if (sqX == 0 && sqY == i) {
            square.innerText = i;
        }
    }

    let letters = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    for (let i = 1; i < rowColNum; i++) {
        if (sqY == 0 && sqX == i) {
            square.innerText = letters[i];
        }
    }

    //Расставляю шахматные фигуры
    if ((sqY == 1 || sqY == 2) && sqX != 0) {
        square.style.color = 'white';
        if (sqY == 2) {
            square.innerHTML = '<i class="fas fa-chess-pawn"></i>';
        }
    }
    if (sqY == 7 && sqX != 0) {
        square.innerHTML = '<i class="fas fa-chess-pawn"></i>';
    }
    if ((sqX == 1 || sqX == 8) && sqY == 1) {
        square.innerHTML = '<i class="fas fa-chess-rook"></i>';
    }
    if ((sqX == 1 || sqX == 8) && sqY == 8) {
        square.innerHTML = '<i class="fas fa-chess-rook"></i>';
    }
    if ((sqX == 2 || sqX == 7) && sqY == 1) {
        square.innerHTML = '<i class="fas fa-chess-knight"></i>';
    }
    if ((sqX == 2 || sqX == 7) && sqY == 8) {
        square.innerHTML = '<i class="fas fa-chess-knight"></i>';
    }
    if ((sqX == 3 || sqX == 6) && sqY == 1) {
        square.innerHTML = '<i class="fas fa-chess-bishop"></i>';
    }
    if ((sqX == 3 || sqX == 6) && sqY == 8) {
        square.innerHTML = '<i class="fas fa-chess-bishop"></i>';
    }
    if ((sqY == 1 || sqY == 8) && sqX == 5) {
        square.innerHTML = '<i class="fas fa-chess-queen"></i>';
    }
    if ((sqY == 1 || sqY == 8) && sqX == 4) {
        square.innerHTML = '<i class="fas fa-chess-king"></i>';
    }
});


