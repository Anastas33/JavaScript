'use strict';

class Game {
    constructor() {
        this.wordDiv = document.getElementById('word');
        this.tryCountEl = document.getElementById('tryCount');
        this.tryCount = 6;
    }

    /**
     * Метод получает другие игровые объекты, которые нужны ему для работы.
     * @param {Task} task
     * @memberof Game
     */
    init(task) {
        this.task = task;
    }

    run() {
        alert(`Приветсвую Вас!
        \nПредлагаю отгадать загаданное мной слово на русском языке.
        \nУ вас ограниченное число попыток (в случае неправильно введенной буквы).
        \nУдачи!`)
        this.initPressKeyHandler()
    }

    /**
     * Метод выводит загаданное слово на экран, закрыв буквы черными квадратами.
     * @memberof Game
     */
    showWord() {
        this.task.word.forEach(letter => {
            let div = document.createElement('div');
            div.innerText = letter;
            div.classList.add('letter', 'hidden');
            this.wordDiv.appendChild(div);
        });
    }

    /**
     * Метод показывает на экране количество оставшихся попыток.
     */
    showCounts() {
        this.tryCountEl.innerText = this.tryCount;
    }

    /**
     * Метод находит закрытые буквы.
     * @returns {Array} массив из закрытых букв.
     */
    findHiddenLetters() {
        return document.querySelectorAll('.hidden');
    }

    /**
     * Метод показывает есть ли закрыте буквы в слове.
     * @returns {boolean} - если есть закрытые буквы, то true, а иначе false.
     */
    areThereHiddenLetters() {
        let result = this.findHiddenLetters().length > 0 ? true : false;
        return result;
    }

    /**
     * Метод инициализирует обработчик нажатия клавиш букв.
     */
    initPressKeyHandler() {
        document.addEventListener('keypress', this.pressKeyHandler.bind(this))
    }

    /**
     * Метод обрабатывает каждое нажатие клавиш.
     * 1. Смотрит была ли нажата правильная буква.
     * 2. Обновляет счетчик попыток.
     * 3. Проверяет остались ли еще закрыте буквы, в случае их отстутсвия выводится сообщение о выигрыше.
     * 4. Проверяет остались ли еще попытки для отгадывания букв, если не осталось, то выводится сообщение о проигрыше.
     * @param {KeyboardEvent} event 
     */
    pressKeyHandler(event) {
        let wordDivs = this.findHiddenLetters();
        let rightLetter = 0;
        wordDivs.forEach(div => {
            if (div.innerText == event.key) {
                div.classList.remove('hidden');
                rightLetter += 1;
            } 
        })
        if (!(rightLetter > 0)) {
            this.tryCount -= 1;
        }

        this.showCounts();

        if (!this.areThereHiddenLetters()) {
            alert('Поздравляю, Вы отгадали!');
            return;
        }
        
        if (this.tryCount == 0) {
            alert(`Вы проиграли! Загаданное слово: ${this.task.wordAnswer}.`);
            return;
        }
    }
}