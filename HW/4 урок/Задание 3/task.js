'use strict';

let task = {
    list: [
        {
            question: 'Кто пел детскую песенку про улыбку?\na. Лиса\nb. Заяц\nc. Енот\nd. Кот\nДля выхода нажмите "Отмена".',
            answer: 'c'
        },
        {
            question: 'Перевод слова true?\na. Ложь\nb. Правда\nc. Всегда\nd. Не знаю\nДля выхода нажмите "Отмена".',
            answer: 'b'
        },
        {
            question: 'Сколько было гномов в Белоснежке?\na. Не было\nb. 5\nc. 3\nd. 7\nДля выхода нажмите "Отмена".',
            answer: 'd'
        },
        {
            question: 'Сколько в мире океанов?\na. 6\nb. 5\nc. 4\nd. 3\nДля выхода нажмите "Отмена".',
            answer: 'c'
        },
        {
            question: 'Как зовут лучшего друга Винни Пуха?\na. Пятачок\nb. Кролик\nc. Иа\nd. Тигра\nДля выхода нажмите "Отмена".',
            answer: 'a'
        }
    ],

    askQuestions() {
        let count = 0;
        for (let i = 0; i < this.list.length; i++) {
            let userAnswer = prompt(this.list[i].question);
            if (userAnswer === null) {
                break;
            } else if (this.list[i].answer === userAnswer) {
                alert('Вы отгадали!');
                count++;
            } else {
                alert(`Вы не отгадали. Правильный ответ: ${this.list[i].answer}.`);
            }
        };
        
        let playOrNot = confirm(`Игра окончена. Количество правильных ответов: ${count}.
        \nИграть снова?`);
        if (playOrNot) {
            this.askQuestions();
        };
    }
}



