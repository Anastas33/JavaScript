'use strict';

let table = document.querySelector('table');

/* function createBoard() {
    let board = '';
    for (let y = 0; y < 9; y++) {
        board += '<tr>';
        for (let x = 0; x < 9; x++) {
            board += `<td data-x=${x} data-y=${y}><td>`;
        }
        board +='</tr>';
    }
    return `<table>${board}</table>`;
}

createBoard(); */

/* let ggg = document.createElement('table');
ggg.innerText = board; */

let board = '';
for (let y = 0; y < 9; y++) {
    board += '<tr>';
    for (let x = 0; x < 9; x++) {
        board += `<td data-x='${x}' data-y='${y}'></td>`;
        if (x % 2 == 0 && y % 2 == 1) {
            td.style.backgroundColor = 'black';
        }
    }
    board +='</tr>';
}

table.insertAdjacentHTML('afterbegin', board);