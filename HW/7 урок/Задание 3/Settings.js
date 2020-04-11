'use strict';

class Settings {
    /**
     * Функция проверяет верные ли настройки задал пользователь и устанавливает их
     *
     * @param {object} params - Параметр игры.
     * @param {number} params.rowsCount - количество строк игрового поля.
     * @param {number} params.colsCount - количество колонок игрового поля.
     * @param {number} params.speed - скорость перемещения змейки.
     * @param {number} params.winLength - какую длину надо наесть, чтобы выиграть.
     * @throws {Error} - если переданы неверные настройки, выбрасывается соответствующая ошибка.
     */
    init(params) {
        let defaultParams = {rowsCount: 21, colsCount: 21, speed: 2, winLength: 50};
        Object.assign(defaultParams, params);

        if (defaultParams.rowsCount < 10 || defaultParams.rowsCount > 30) {
            throw new Error('Неверные настройки. Значение rowsCount должно быть в диапозоне от 10 до 30.');
        }
        this.rowsCount = defaultParams.rowsCount;

        if (defaultParams.colsCount < 10 || defaultParams.colsCount > 30) {
            throw new Error('Неверные настройки. Значение colsCount должно быть в диапозоне от 10 до 30.');
        }
        this.colsCount = defaultParams.colsCount;

        if (defaultParams.speed < 1 || defaultParams.speed > 10) {
            throw new Error('Неверные настройки. Значение speed должно быть в диапозоне от 1 до 10.');
        }
        this.speed = defaultParams.speed;

        if (defaultParams.winLength < 5 || defaultParams.winLength > 50) {
            throw new Error('Неверные настройки. Значение winLength должно быть в диапозоне от 5 до 50.');
        }
        this.winLength = defaultParams.winLength;
    }
}