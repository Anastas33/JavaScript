'use strict';

let renderer = {
    map: '',
    render() {
        for (let row = 0; row < config.row; row++) {
            for (let column = 0; column < config.column; column++) {
                if (row == player.x && column == player.y) {
                    this.map += 'o ';
                } else {
                    this.map += 'x ';
                }
            }
            this.map += '\n';
        }
        console.log(this.map);
    },
    clear() {
        console.clear();
        this.map = '';
    }
};