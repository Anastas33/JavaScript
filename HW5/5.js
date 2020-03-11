'use strict';

let table = document.querySelector('table');

let board = '';
for (let y = 0; y < 9; y++) {
    board += '<tr>';
    for (let x = 0; x < 9; x++) {
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
        square.style.backgroundColor = 'black';
    };
    if (sqX == 0 || sqY == 0) {
        square.style.backgroundColor = 'white';
    };

    if (sqX == 0 && sqY == 1) {
        square.innerText = sqY;
    } else if (sqX == 0 && sqY == 2) {
        square.innerText = sqY;
    } else if (sqX == 0 && sqY == 3) {
        square.innerText = sqY;
    } else if (sqX == 0 && sqY == 4) {
        square.innerText = sqY;
    } else if (sqX == 0 && sqY == 5) {
        square.innerText = sqY;
    } else if (sqX == 0 && sqY == 6) {
        square.innerText = sqY;
    } else if (sqX == 0 && sqY == 7) {
        square.innerText = sqY;
    } else if (sqX == 0 && sqY == 8) {
        square.innerText = sqY;
    };

    if (sqY == 0 && sqX == 1) {
        square.innerText = 'A';
    } else if (sqY == 0 && sqX == 2) {
        square.innerText = 'B';
    } else if (sqY == 0 && sqX == 3) {
        square.innerText = 'C';
    } else if (sqY == 0 && sqX == 4) {
        square.innerText = 'D';
    } else if (sqY == 0 && sqX == 5) {
        square.innerText = 'E';
    } else if (sqY == 0 && sqX == 6) {
        square.innerText = 'F';
    } else if (sqY == 0 && sqX == 7) {
        square.innerText = 'G';
    } else if (sqY == 0 && sqX == 8) {
        square.innerText = 'H';
    }
});
