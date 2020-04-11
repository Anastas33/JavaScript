'use strict';

class Snake {
    constructor() {
        this.possibleDirections = ['down', 'up', 'left', 'right'];

        this.body = [{
            x: 1,
            y: 1,
        }];

        this.direction = 'down';
    }

    /**
     * Метод получает другие игровые объекты, которые нужны ему для работы.
     * @param {Settings} settings
     */
    init(settings) {
        this.settings = settings;
    }

    /**
     * Меняем направление движения.
     * @param {string} newDirection - направление может быть down, up, left, right.
     * @throws {Error} - при передаче некорректного направления выбрасывается ошибка.
     */
    changeDirection(newDirection) {
        if (!this.possibleDirections.includes(newDirection)) {
            throw new Error('Передано неверное направление. Вы передали: ' + newDirection);
        }
        if (this.isPassedOppositeDirection(newDirection)) {
            return;
        }
        this.direction = newDirection;
    }

    /**
     * Метод проверяет является ли переданное направление противоположным тому куда сейчас
     * движется змейка.
     * @param {string} newDirection - новое напрвление, может быть down, up, left, right.
     * @returns {boolean} - true, если новое направление противоположно текущему, иначе false.
     */
    isPassedOppositeDirection(newDirection) {
        if (this.direction == 'down' && newDirection == 'up') {
            return true;
        }
        if (this.direction == 'up' && newDirection == 'down') {
            return true;
        }
        if (this.direction == 'left' && newDirection == 'right') {
            return true;
        }
        if (this.direction == 'right' && newDirection == 'left') {
            return true;
        }
    }

    /**
     * Метод делает шаг змейки, если следующий шаг за пределами игрового поля, то змейка выходит с противоположной стороны поля.
     */
    performStep() {
        let currentHeadCoords = this.body[0];
        let newHeadCoords = {
            x: currentHeadCoords.x,
            y: currentHeadCoords.y,
        };
        switch (this.direction) {
            case 'down':
                newHeadCoords.y++;
                break;
            case 'up':
                newHeadCoords.y--;
                break;
            case 'left':
                newHeadCoords.x--;
                break;
            case 'right':
                newHeadCoords.x++;
                break;
        }
        if (newHeadCoords.x < 1) {
            newHeadCoords.x = this.settings.colsCount;
        }
        if (newHeadCoords.x > this.settings.colsCount) {
            newHeadCoords.x = 1;
        }
        if (newHeadCoords.y < 1) {
            newHeadCoords.y = this.settings.rowsCount;
        }
        if (newHeadCoords.y > this.settings.rowsCount) {
            newHeadCoords.y = 1;
        }

        this.body.unshift(newHeadCoords);
        this.body.pop();
    }

    /**
     * Метод увеличивает тело змейки на 1 ячейку.
     */
    increaseBody() {
        let bodyLastCell = this.body[this.body.length - 1];
        let newBodyLastCell = {
            x: bodyLastCell.x,
            y: bodyLastCell.y,
        };
        this.body.push(newBodyLastCell);
    }
}