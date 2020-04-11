'use strict';

class Map {
    constructor() {
        this.gameTableElement = document.getElementById('game');
        this.mapValues = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
    }

    renderMap() {
        for (let row = 0; row < 3; row++) {
            let tr = document.createElement('tr');
            this.gameTableElement.appendChild(tr);
            for (let col = 0; col < 3; col++) {
                let td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    }
}