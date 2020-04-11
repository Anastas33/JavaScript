'use strict';

class Game {
    constructor() {
        this.phase = 'X';
    }

    init(map, status) {
        this.map = map;
        this.status = status;
    }

    initEventHandlers() {
        this.map.gameTableElement.addEventListener('click', this.cellClickHandler.bind(this));
    }

    cellClickHandler(event) {
        if (!this.isCorrectClick(event)) {
            return;
        }

        this.fillCell(event);

        if (this.hasWon()) {
            this.status.setStatusStopped();
            this.sayWonPhrase();
        }

        this.togglePhase();
    }

    isCorrectClick(event) {
        return this.status.isStatusPlaying() && this.isClickByCell(event) && this.isCellEmpty(event);
    }

    isClickByCell(event) {
        return event.target.tagName === 'TD';
    }

    isCellEmpty(event) {
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;
        return this.map.mapValues[row][col] === '';
    }

    fillCell(event) {
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;
        this.map.mapValues[row][col] = this.phase;
        event.target.textContent = this.phase;
    }

    hasWon() {
        return this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }) ||
            this.isLineWon({ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }) ||
            this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }) ||

            this.isLineWon({ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }) ||
            this.isLineWon({ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }) ||
            this.isLineWon({ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }) ||

            this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }) ||
            this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 });
    }

    isLineWon(a, b, c) {
        let value = this.map.mapValues[a.y][a.x] + this.map.mapValues[b.y][b.x] + this.map.mapValues[c.y][c.x];
        return value === 'XXX' || value === "000";
    }

    sayWonPhrase() {
        let figure = this.phase === 'X' ? 'Крестики' : 'Нолики';
        alert(`${figure} выиграли!`);
    }

    togglePhase() {
        this.phase = this.phase === 'X' ? '0' : 'X';
    }
}