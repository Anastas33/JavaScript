'use strict';

class Board {
    constructor() {
        this.boardEl = document.getElementById('game');
    }

    /**
     * Метод получает другие игровые объекты, которые нужны ему для работы.
     * @param {Settings} settings
     * @param {Snake} snake
     */
    init(settings, snake) {
        this.settings = settings;
        this.snake = snake;
    }

    /**
     * Метод отрисовывает игровое поле.
     */
    renderBoard() {
        this.boardEl.innerHTML = '';
        for (let row = 0; row < this.settings.rowsCount; row++) {
            let tr = document.createElement('tr');
            this.boardEl.appendChild(tr);

            for (let col = 0; col < this.settings.colsCount; col++) {
                let td = document.createElement('td');
                tr.appendChild(td);
            }
        }
    }

    /**
     * Метод отрисовывет змейку на доске.
     */
    renderSnake() {
        const snakeBodyElems = this.getSnakeBodyElems(this.snake.body);
        if (snakeBodyElems) {
            snakeBodyElems.forEach(function(tdEl) {
                tdEl.classList.add('snakeBody');
            })
        }
    }

    /**
     * Метод очищает игровое поле.
     */
    clearBoard() {
        const tdElems = document.querySelectorAll('td');
        tdElems.forEach(function(td) {
            td.className = '';
        });
    }

    /**
     * Получаем ячейку таблицы.
     * @param {number} x - координата по оси x.
     * @param {number} y - координата по оси y.
     * @returns {HTMLTableCellElement} тэг td.
     */
    getCellElem(x, y) {
        return this.boardEl.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`);
    }

    /**
     * Получаем набор тэгов td, представляющих тело змейки.
     * @param {Array} bodyCoords - массив объектов с координатами.
     * @returns {HTMLTableCellElement[]|null} возвращает массив тэгов td, если были
     * переданы координаты, иначе null.
     */
    getSnakeBodyElems(bodyCoords) {
        if (bodyCoords.length > 0) {
            let bodyElems = [];
            for (let value of bodyCoords) {
                let elem = this.getCellElem(value.x, value.y);
                bodyElems.push(elem);
            }
            return bodyElems;
        }
        return null;
    }

    /**
     * Метод рисует еду на игровом поле.
     * @param {Food} coords - будущее расположение еды на игровом поле.
     * @param {number} coords.x - координата x.
     * @param {number} coords.y - координата y.
     */
    renderFood(coords) {
        const foodCell = this.getCellElem(coords.x, coords.y);
        foodCell.classList.add('food');
    }

    /**
     * Метод проверяет съела ли змейка еду.
     * @returns {boolean} - true, если змейка находится на еде, иначе false.
     */
    isHeadOnFood() {
        return this.boardEl.querySelector('.food').classList.contains('snakeBody');
    }

    /**
     * Является ли следующий шаг шагом в тело змейки.
     * @param {Object} nextCellCoords - координаты ячейки, куда змейка собирается сделать шаг.
     * @param {number} nextCellCoords.x
     * @param {number} nextCellCoords.y
     * @returns {boolean}
     */
    isNextStepToSnakeBody(nextCellCoords) {
        let nextCell = this.getCellElem(nextCellCoords.x, nextCellCoords.y);
        return nextCell.classList.contains('snakeBody');
    }
}