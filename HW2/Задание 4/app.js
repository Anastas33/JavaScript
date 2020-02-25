'use strict';

let a = parseInt(prompt('Введите первое число'));
let b = parseInt(prompt('Введите второе число'));

function getPlus (num1, num2) {
    return num1 + num2;
}
alert('Сумма равна ' + getPlus (a, b));

function getMinus (num1, num2) {
    return num1 - num2;
}
alert('Разность равна ' + getMinus (a, b));

function getMulti (num1, num2) {
    return num1 * num2;
}
alert('Произведение равно ' + getMulti (a, b));

function getDivis (num1, num2) {
    return num1 / num2;
}
alert('Частное равно ' + getDivis (a, b));