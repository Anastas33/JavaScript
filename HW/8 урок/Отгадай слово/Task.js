'use strict';

class Task {
    constructor() {
        this.words = [
            'пароль',
            'строительство',
            'грант',
            'трель',
            'альбом',
            'ливень',
            'классика',
            'пума',
            'лекарство',
        ];
        this.wordAnswer = this.chooseRandomWord();
        this.word = this.makeWordAsArray(this.wordAnswer);
    }

    /**
     * Метод генерирует случайно выбранное число в диапозоне от 0 до длины массива со словами - 1.
     * @returns {integer}
     * @memberof Task
     */
    generateRandomNumber() {
        return Math.floor(Math.random() * this.words.length);
    }

    /**
     * Метод выбирает слово из массива слов по индексу согласно случайно выбранному числу.
     * @returns {string}
     * @memberof Task
     */
    chooseRandomWord() {
        return this.words[this.generateRandomNumber()];
    }

    /**
     * Метод преобразовывает случайно выбранное слово в массив букв.
     * @param {string}
     * @returns {Array}
     * @memberof Task
     */
    makeWordAsArray(word) {
        return word.split('');
    }
}