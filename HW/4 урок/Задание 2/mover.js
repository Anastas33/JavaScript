'use strict';

let mover = {
    getDirection() {
        let position = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt('Введите цифры для движения: 1, 2, 3, 4, 6, 7, 8, 9'));
            if (isNaN(direction)) {
                return null;
            }
            if (!position.includes(direction)) {
                alert('Вы ввели неверную цифру');
                continue;
            }
            return direction;
        }
    },
    getNextPosition(direction) {
        let nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                nextPosition.x++;
                nextPosition.y--;
                break;
            case 2:
                nextPosition.x++;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 4:
                nextPosition.y--;
                break;
            case 6:
                nextPosition.y++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8:
                nextPosition.x--;
                break;
            case 9:
                nextPosition.x--;
                nextPosition.y++;
                break;
        }
        if (nextPosition.x < 0 || nextPosition.x > (config.row - 1)) {
            nextPosition.x = player.x;
            nextPosition.y = player.y;
        }
        if (nextPosition.y < 0 || nextPosition.y > (config.column - 1)) {
            nextPosition.x = player.x;
            nextPosition.y = player.y;
        }
        return nextPosition;
    }
}